import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'eddie-varela-cms.onrender.com',
      'localhost',
      '.onrender.com' // This allows any subdomain of onrender.com
    ]
  }
})
