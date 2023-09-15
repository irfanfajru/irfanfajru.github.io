/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com", "flowbite.s3.amazonaws.com"],
  },
  output: "export",
};

module.exports = nextConfig;
