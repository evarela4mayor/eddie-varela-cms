module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'custom-redirect',
    resolve: () => {
      return async (ctx, next) => {
        if (ctx.request.path === '/' || ctx.request.path === '') {
          ctx.redirect('/admin');
          return;
        }
        await next();
      };
    },
  },
  {
    name: 'strapi::public',
    config: {
      contentType: true,
      defaultIndex: 'index.html',
      paths: [{ path: '/admin', folder: 'build' }],
    },
  },
];
