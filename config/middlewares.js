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
    name: 'strapi::favicon',
    config: {
      path: 'favicon.ico',
    },
  },
  {
    resolve: './src/middlewares/custom-redirect.js',
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
