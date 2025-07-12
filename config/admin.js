module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'c9TWIE70kKs1ALYTx4tOKg=='),
  },
});
