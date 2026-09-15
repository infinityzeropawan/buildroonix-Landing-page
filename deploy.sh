#!/bin/bash
# BUILDROONIX VPS Deployment & Update Script
set -e

echo "🚀 Starting Buildroonix VPS Update..."

# Pull latest code from GitHub main
git pull origin main

# Install npm dependencies
npm install --production

# Restart PM2 process seamlessly
pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js

echo "✅ Deployment completed successfully! Live on https://buildroonix.com"
