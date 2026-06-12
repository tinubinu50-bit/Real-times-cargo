/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export images to work on GitHub Pages
  },
};

export default nextConfig;
