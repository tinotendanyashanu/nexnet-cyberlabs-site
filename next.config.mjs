/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Prevent incorrect workspace root inference when multiple lockfiles exist on the machine
  outputFileTracingRoot: process.cwd(),
  experimental: {
    optimizePackageImports: ["clsx"]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" }
        ]
      }
    ];
  }
};
export default nextConfig;
