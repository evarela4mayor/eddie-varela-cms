const { defineConfig } = require('vite')

module.exports = defineConfig({
  server: {
    allowedHosts: [
      'eddie-varela-cms.onrender.com',
      'localhost',
      '.onrender.com'
    ]
  }
})
