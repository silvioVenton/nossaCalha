// next.config.js

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval'
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://www.google.com
        https://connect.facebook.net
        https://stats.g.doubleclick.net;
      connect-src 'self'
        https://www.google-analytics.com
        https://www.googletagmanager.com
        https://www.google.com
        https://analytics.google.com
        https://connect.facebook.net
        https://stats.g.doubleclick.net;
      img-src 'self' data: blob:
        https://www.google-analytics.com
        https://www.googletagmanager.com
        https://www.google.com
        https://connect.facebook.net
        https://stats.g.doubleclick.net;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      frame-src 'self'
        https://www.googletagmanager.com
        https://www.google.com
        https://connect.facebook.net
        https://www.youtube.com;
    `.replace(/\s{2,}/g, " ").trim(),
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




