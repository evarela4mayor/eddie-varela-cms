module.exports = () => {
  return async (ctx, next) => {
    if (ctx.request.path === '/' || ctx.request.path === '') {
      ctx.redirect('/admin');
      return;
    }
    await next();
  };
};
