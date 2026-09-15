module.exports = {
  apps: [
    {
      name: 'buildroonix-landing-page',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 8080,
        ADMIN_PASSWORD: 'buildroonix2026',
        AUTH_TOKEN: 'bx_admin_token_2026_secured'
      }
    }
  ]
};
