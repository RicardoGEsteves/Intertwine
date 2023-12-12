/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
    ],
  },
};

module.exports = nextConfig;

// If you want to use WebSocket in Next.js, you need to add the following code to next.config.js.
// To get socket.io-client to work, you need to add the following code to next.config.js.

// const nextConfig = {
//   webpack: (config) => {
//     config.externals.push({
//       "utf-8-validate": "commonjs utf-8-validate",
//       bufferutil: "commonjs bufferutil"
//     });

//     return config;
//   },
// };

// if you want to use mjs in Next.js, you need to add the following code to next.config.js.
// To get livekit to work, you need to add the following code to next.config.js.

// const nextConfig = {
//   webpack: (
//     config,
//     { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
//   ) => {
//     config.module.rules.push({
//       test: /\.mjs$/,
//       include: /node_modules/,
//       type: "javascript/auto",
//     });
//     return config;
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "utfs.io",
//       },
//       {
//         protocol: "https",
//         hostname: "uploadthing.com",
//       },
//     ],
//   },
// };
