module.exports = {
  async bootstrap({ strapi }) {
    strapi.server.routes([
      {
        method: 'GET',
        path: '/',
        handler: (ctx) => {
          ctx.redirect('/admin');
        },
        config: { auth: false },
      },
    ]);
  },
};
