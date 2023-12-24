/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
//   dest: "public",
// });

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1vy2g8p6qsw6.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

// module.exports = withPWA({
//   nextConfig,
// });
