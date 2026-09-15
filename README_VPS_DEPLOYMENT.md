# Buildroonix Landing Page — VPS Deployment Guide

Live URL: **https://buildroonix.com**  
Admin Panel: **https://buildroonix.com/admin**

> ⚠️ The VPS already runs `buildroonix2` (Next.js app at `3d.buildroonix.com` on port 3001 via PM2).  
> This guide deploys the **Landing Page** to port **8080** as a completely separate PM2 process — it will **NOT** affect the running app.

---

## Architecture

```
VPS (109.122.56.200)
├── NGINX
│   ├── buildroonix.com       → port 8080  (this project, PM2: buildroonix-landing)
│   └── 3d.buildroonix.com    → port 3001  (existing project, PM2: buildroonix2)
└── PM2
    ├── buildroonix-landing   (server.js, port 8080)
    └── buildroonix2          (Next.js, port 3001)  ← existing, DO NOT TOUCH
```

---

## Step 1 — SSH into VPS

```bash
ssh root@109.122.56.200
# Password is in CREDENTIALS.TXT (never share publicly)
```

---

## Step 2 — Clone the Landing Page Repo

```bash
cd /var/www
git clone https://github.com/infinityzeropawan/buildroonix-Landing-page.git buildroonix
cd buildroonix
npm install --production
chmod +x deploy.sh
```

---

## Step 3 — Start with PM2

```bash
pm2 start ecosystem.config.js --env production
pm2 save         # Save process list so it survives reboot
pm2 status       # Should show buildroonix-landing as "online"
```

Verify it's running:
```bash
curl http://localhost:8080/api/health
# Expected: {"status":"ok","service":"Buildroonix Production API",...}
```

**DO NOT touch the `buildroonix2` PM2 process** — it is the other running app.

---

## Step 4 — Create PM2 Log Directory

```bash
mkdir -p /var/log/pm2
```

---

## Step 5 — Configure NGINX (New Vhost — Does NOT Affect 3d.buildroonix.com)

```bash
# Copy new vhost config
cp /var/www/buildroonix/nginx.conf /etc/nginx/sites-available/buildroonix.com

# Enable it
ln -s /etc/nginx/sites-available/buildroonix.com /etc/nginx/sites-enabled/buildroonix.com

# Test NGINX config (should print "syntax is ok")
nginx -t

# Reload NGINX (zero-downtime, existing 3d.buildroonix.com continues working)
systemctl reload nginx
```

---

## Step 6 — Get SSL Certificate for buildroonix.com

```bash
certbot --nginx -d buildroonix.com -d www.buildroonix.com
```

Certbot will:
- Auto-configure HTTPS in `/etc/nginx/sites-available/buildroonix.com`
- Set up auto-renewal every 90 days
- Your `3d.buildroonix.com` SSL cert is **completely separate** and unaffected

---

## Step 7 — Set Up GitHub Secrets for Auto CI/CD

Go to: **GitHub → Repository Settings → Secrets and variables → Actions → New repository secret**

Add these 3 secrets:

| Secret Name  | Value                                        |
|:-------------|:---------------------------------------------|
| `VPS_HOST`   | `109.122.56.200`                             |
| `VPS_USER`   | `root`                                       |
| `VPS_SSH_KEY`| Contents of your SSH private key (see below) |

### Generate an SSH Key for GitHub Actions (on VPS):

```bash
# On the VPS:
ssh-keygen -t ed25519 -C "github-actions-buildroonix" -f ~/.ssh/github_deploy -N ""
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Copy private key content → paste into VPS_SSH_KEY GitHub secret:
cat ~/.ssh/github_deploy
```

After adding secrets, every `git push` to `main` will automatically deploy to `buildroonix.com`!

---

## Verify Both Sites After Deployment

```bash
pm2 status
# Should show BOTH processes online:
# ┌──────────────────────┬─────┬──────────┐
# │ buildroonix-landing  │ ... │ online   │
# │ buildroonix2         │ ... │ online   │

# Test landing page
curl -I https://buildroonix.com

# Test existing site still works
curl -I https://3d.buildroonix.com
```

---

## Manual Update (Without GitHub Actions)

```bash
cd /var/www/buildroonix
./deploy.sh
```

---

## Admin Panel Access

- **URL**: `https://buildroonix.com/admin`
- **Password**: `buildroonix2026`  
  *(Change in VPS by editing `/var/www/buildroonix/ecosystem.config.js` → `ADMIN_PASSWORD` env)*

---

## Troubleshooting

```bash
# View live logs
pm2 logs buildroonix-landing --lines 50

# Restart if crashed
pm2 restart buildroonix-landing

# Check NGINX logs
tail -f /var/log/nginx/error.log

# Check which ports are in use
ss -tlnp | grep -E '8080|3001'
```
