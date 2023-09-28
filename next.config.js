/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
});
module.exports = nextConfig;
