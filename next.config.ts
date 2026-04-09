import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows optimizing images from these remote sources
    // Add your image CDN domain here if you use one (e.g., Cloudinary)
    remotePatterns: [],
  },
};

export default nextConfig;
