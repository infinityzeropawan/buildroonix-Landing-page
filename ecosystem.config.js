module.exports = {
  apps: [
    {
      name: 'buildroonix-landing',          // PM2 process name (different from buildroonix2)
      script: 'server.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      error_file: '/var/log/pm2/buildroonix-landing-error.log',
      out_file: '/var/log/pm2/buildroonix-landing-out.log',
      time: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080,
        ADMIN_PASSWORD: 'buildroonix2026',
        AUTH_TOKEN: 'bx_admin_token_2026_secured'
      }
    }
  ]
};
