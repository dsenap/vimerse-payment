module.exports = {
  apps: [
    {
      name: 'frontend_next',
      cwd: '/root/vimerse-website-upgrade/frontend_next',
      script: 'npm',
      args: 'start',
      env: {
        NEXT_PUBLIC: 'NEXT_PUBLIC',
      },
    },
],};
