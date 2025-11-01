// next.config.js

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com;
      connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com;
      img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com;
      frame-src 'self' https://www.googletagmanager.com https://www.youtube.com https://www.google.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
    `.replace(/\s{2,}/g, ' ').trim(),
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};


