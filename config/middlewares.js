module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  {
    name: 'strapi::public',
    config: {
      contentType: true,
      defaultIndex: 'index.html',
      paths: [
        {
          path: '/admin',
          folder: 'build', // Serve admin panel from build/ folder
        },
      ],
    },
  },
  {
    name: 'custom-redirect',
    config: {
      resolve: async (ctx, next) => {
        if (ctx.request.path === '/' || ctx.request.path === '') {
          // Redirect root to admin panel
          ctx.redirect('/admin');
          return;
        }
        await next();
      },
    },
  },
];
