module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'c9TWIE70kKs1ALYTx4tOKg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'YiWyyIPUPINSpMeZtmfqlA=='),
    },
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'kNuqC0ZtVBgE8WJqngcRQQ=='),
  },
  url: env('STRAPI_ADMIN_BACKEND_URL', 'https://eddie-varela-cms.onrender.com'),
});
