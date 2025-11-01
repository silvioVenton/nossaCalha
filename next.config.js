// next.config.js
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://connect.facebook.net;
      connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://analytics.google.com https://connect.facebook.net;
      img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://connect.facebook.net;
      style-src 'self' 'unsafe-inline';
      frame-src https://www.googletagmanager.com https://www.google.com https://connect.facebook.net;
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



