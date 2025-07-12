module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['T4MxgkasNT69LUaVNef5WsJSGeJhnvi1mhCCwSCQ+J4=', 'rq2ID8BS16ZAx2elXkV8IJRSEBYDE+ufIRzroC9PkX4=', 'ztlSBTch+xybgqKUqkVIgBiw26mmCP2Oaz+SlOSJu4g=', 'RqOG76Gq2Rv+T3bLjVplqHewELnid7h1bdqO1bC6e9c=']),
  },
});
