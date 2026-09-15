# Buildroonix Production VPS Deployment Guide

This repository contains the complete **Full-Stack Landing Page, Admin Management System, and Production Express Backend API** for **[buildroonix.com](https://buildroonix.com)**.

---

## 🚀 Architecture Highlights

- **Frontend**: Pure Vanilla HTML5, CSS3 (Warm Editorial Design System), JS ES6+
- **Backend**: Express Node.js Production Server (`server.js`)
- **Database**: Zero-dependency Atomic Persistent JSON DB (`/data/content.json`)
- **Admin Access**: Dedicated `/admin` route with backend authentication (`POST /api/login`) & token authorization (`POST /api/content`)
- **Uptime Manager**: PM2 ecosystem config (`ecosystem.config.js`)
- **Reverse Proxy**: NGINX with SSL (`nginx.conf`)

---

## 🛠️ Step-by-Step VPS Deployment (Ubuntu / Debian)

### 1. Point Domain DNS to VPS
In your Domain Registrar (Hostinger / GoDaddy / Cloudflare):
- **A Record**: `@` -> `YOUR_VPS_PUBLIC_IP`
- **A Record**: `www` -> `YOUR_VPS_PUBLIC_IP`

---

### 2. Prepare Server Dependencies
Connect to your VPS via SSH:
```bash
ssh root@YOUR_VPS_PUBLIC_IP
```

Install Node.js (v20+), Git, Nginx, PM2, and Certbot:
```bash
sudo apt update && sudo apt install -y curl git nginx certbot python3-certbot-nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

---

### 3. Clone Repository & Install Packages
```bash
cd /var/www
sudo git clone https://github.com/infinityzeropawan/buildroonix-Landing-page.git buildroonix
cd buildroonix
sudo npm install --production
```

---

### 4. Start Server with PM2 (24/7 Uptime)
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

Verify status:
```bash
pm2 status
curl http://localhost:8080/api/health
```

---

### 5. Configure NGINX Reverse Proxy
Copy the provided Nginx configuration:
```bash
sudo cp nginx.conf /etc/nginx/sites-available/buildroonix.com
sudo ln -s /etc/nginx/sites-available/buildroonix.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

### 6. Enable Free SSL Certificate (HTTPS)
```bash
sudo certbot --nginx -d buildroonix.com -d www.buildroonix.com
```
*(Certbot will automatically configure HTTPS redirects and renew SSL every 90 days)*

---

## 🔐 Admin Portal & Access Links

- **Main Public Landing Page**: `https://buildroonix.com`
- **Separate Admin Portal URL**: `https://buildroonix.com/admin` (or `https://buildroonix.com/admin.html`)
- **Admin Password**: `buildroonix2026` *(Configurable in `.env` as `ADMIN_PASSWORD`)*

---

## 🤖 Automatic CI/CD Deployment with GitHub Actions

We have configured a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to your VPS every time you push code to `main`.

### To activate Automatic Deployment on GitHub:
1. Go to your GitHub Repository: **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**.
2. Add the following 3 Secrets:

| Secret Name | Value | Example |
| :--- | :--- | :--- |
| `VPS_HOST` | Your VPS Public IP Address | `185.220.101.4` |
| `VPS_USERNAME` | SSH User | `root` |
| `VPS_SSH_KEY` | SSH Private Key contents (`cat ~/.ssh/id_rsa`) | `-----BEGIN OPENSSH PRIVATE KEY-----...` |

Once these 3 secrets are added, every `git push` to `main` will automatically build & restart your site on `buildroonix.com` within 10 seconds!

---

## 🔄 Updating the Site Manually (1-Click Deployment)

Whenever you push new changes to GitHub, you can also update your VPS manually with one command:
```bash
cd /var/www/buildroonix && ./deploy.sh
```
