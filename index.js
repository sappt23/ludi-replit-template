const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const port = process.env.PORT || 3000;

// Example proxy route — modify target as needed
app.use('/', createProxyMiddleware({
  target: 'https://discord.com/',
  changeOrigin: true,
  pathRewrite: { '^/': '/' },
}));

app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
