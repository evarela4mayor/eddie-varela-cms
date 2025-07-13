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
      paths: [{ path: '/admin', folder: 'build' }],
    },
  },
  {
    name: 'custom-redirect',
    resolve: './src/middlewares/custom-redirect.js',
  },
];
