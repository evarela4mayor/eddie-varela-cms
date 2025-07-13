module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_PUBLIC_URL', 'https://eddie-varela-cms.onrender.com'),
  allowedHosts: ['eddie-varela-cms.onrender.com'],
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    autoOpen: false, // Prevent auto-opening browser in production
  },
});
