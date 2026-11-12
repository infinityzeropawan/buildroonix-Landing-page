#!/bin/bash
# BUILDROONIX Landing Page — VPS Update Script
# Usage: Run on VPS inside /var/www/buildroonix → ./deploy.sh
set -e

echo "🚀 Starting Buildroonix Landing Page update..."

# Pull latest code from GitHub
git pull origin main

# Install/update npm dependencies
npm install --silent

# Build Next.js production bundle
npm run build

# Reload PM2 gracefully (zero-downtime) or start fresh if not running
pm2 reload ecosystem.config.js --update-env || pm2 start ecosystem.config.js --env production

echo "✅ Deployment complete! Live at https://buildroonix.com"
pm2 status buildroonix-landing
