import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      { source: "/percorsi/wellness-mastery", destination: "/percorsi/sold-out", permanent: true },
      // privacy e cookie ora sono su iubenda: i vecchi link (email, social, Google) portano lì
      { source: "/privacy", destination: "https://www.iubenda.com/privacy-policy/59136129", permanent: false },
      { source: "/cookie", destination: "https://www.iubenda.com/privacy-policy/59136129/cookie-policy", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
