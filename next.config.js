/** @type {import("next").NextConfig} */
const config = {
  images: { 
    remotePatterns: [{ 
      protocol: "http", 
      hostname: "localhost", 
      port: "4000", 
      pathname: "/media/**" 
    }] 
  },
  experimental: { 
    typedRoutes: true 
  }
};

module.exports = config;
