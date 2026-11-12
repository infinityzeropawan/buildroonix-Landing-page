module.exports = {
  apps: [
    {
      name: 'buildroonix-landing',          // PM2 process name (different from buildroonix2)
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 8080',
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
        PORT: 8080
      }
    }
  ]
};
