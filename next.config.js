// next.config.js

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
      connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;
      img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
      frame-src https://www.googletagmanager.com;
    `.replace(/\s{2,}/g, ' ').trim(),
  },
];

module.exports = {
  async headers() {
    return [
      {
        // Aplica os headers a todas as rotas
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
