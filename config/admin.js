module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  host: env('HOST', '0.0.0.0'),
  url: env('STRAPI_ADMIN_BACKEND_URL'),
});
