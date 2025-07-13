module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  url: env('STRAPI_ADMIN_BACKEND_URL', 'https://eddie-varela-cms.onrender.com'),
  serveAdminPanel: true,
});
