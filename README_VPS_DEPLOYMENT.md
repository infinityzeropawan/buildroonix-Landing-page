# Buildroonix Landing Page — VPS Deployment Guide

Live URL: **https://buildroonix.com**  
Admin Panel: **https://buildroonix.com/admin**

> ⚠️ The VPS already runs `buildroonix2` (Next.js at `3d.buildroonix.com`, port 3001, PM2 process: `buildroonix2`).  
> This deploys the **Landing Page** on port **8080** as `buildroonix-landing` — completely separate.

---

## Architecture on VPS

```
VPS (109.122.56.200)
├── NGINX
│   ├── buildroonix.com       →  port 8080  (this project)
│   └── 3d.buildroonix.com    →  port 3001  (existing — DO NOT TOUCH)
└── PM2
    ├── buildroonix-landing   (server.js,  port 8080)   ← NEW
    └── buildroonix2          (Next.js,    port 3001)   ← EXISTING
```

---

## Step 1 — GitHub Secrets (Reuse Existing SSH Key)

The VPS already has an SSH key set up for the first project.  
**You just need to add the same 3 secrets to THIS repo** (buildroonix-Landing-page).

Go to:  
**GitHub → buildroonix-Landing-page → Settings → Secrets and variables → Actions → New repository secret**

| Secret Name  | Value                                                               |
|:-------------|:--------------------------------------------------------------------|
| `VPS_HOST`   | `109.122.56.200`                                                    |
| `VPS_USER`   | `deploy`                                                            |
| `VPS_SSH_KEY`| Same private key already in the first repo (`/home/deploy/.ssh/github_repo_deploy`) |

> **How to get the private key value:**
> ```bash
> ssh root@109.122.56.200
> cat /home/deploy/.ssh/github_repo_deploy
> ```
> Copy the full output (including `-----BEGIN OPENSSH PRIVATE KEY-----` lines) and paste as `VPS_SSH_KEY`.

---

## Step 2 — One-Time VPS Setup (SSH in as root)

```bash
ssh root@109.122.56.200
```

### 2a. Clone repo into /var/www/buildroonix

```bash
cd /var/www
git clone https://github.com/infinityzeropawan/buildroonix-Landing-page.git buildroonix
cd buildroonix
npm install --production
chmod +x deploy.sh
mkdir -p /var/log/pm2
```

### 2b. Give deploy user ownership (so CI/CD can pull as deploy user)

```bash
chown -R deploy:deploy /var/www/buildroonix
```

### 2c. Start with PM2

```bash
# Switch to deploy user (or stay root if PM2 is managed as root)
pm2 start /var/www/buildroonix/ecosystem.config.js --env production
pm2 save
pm2 status
# Should show: buildroonix-landing | online
```

Verify:
```bash
curl http://localhost:8080/api/health
# Expected: {"status":"ok","service":"Buildroonix Production API",...}
```

---

## Step 3 — NGINX Vhost (Won't affect 3d.buildroonix.com)

```bash
cp /var/www/buildroonix/nginx.conf /etc/nginx/sites-available/buildroonix.com
ln -s /etc/nginx/sites-available/buildroonix.com /etc/nginx/sites-enabled/
nginx -t          # Must print: syntax is ok
systemctl reload nginx
```

---

## Step 4 — Free SSL for buildroonix.com

```bash
certbot --nginx -d buildroonix.com -d www.buildroonix.com
```

> Your existing `3d.buildroonix.com` SSL cert is unaffected.

---

## After Setup — Everything is Automatic

Every `git push` to `main` → GitHub Actions triggers → SSH into VPS as `deploy` user → runs `git pull` + `pm2 reload` → live in ~15 seconds.

---

## Admin Panel

- **URL**: `https://buildroonix.com/admin`
- **Password**: `buildroonix2026`

---

## Manual Update (if needed)

```bash
cd /var/www/buildroonix && ./deploy.sh
```

---

## Troubleshooting

```bash
pm2 logs buildroonix-landing --lines 50   # App logs
pm2 restart buildroonix-landing           # Restart
tail -f /var/log/nginx/error.log          # NGINX errors
ss -tlnp | grep -E '8080|3001'           # Confirm both ports running
```
