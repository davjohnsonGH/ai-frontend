const { NEXT_PUBLIC_ASTRO_URL, NEXT_PUBLIC_ASTRONOMICAL_URL, NEXT_PUBLIC_API_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = { 
  async rewrites() {
    return [
      {
        source: "/astro",
        destination: `${NEXT_PUBLIC_ASTRO_URL}/astro`,
      },
      {
        source: "/astro/:path+",
        destination: `${NEXT_PUBLIC_ASTRO_URL}/astro/:path+`,
      },
      {
        source: "/astro-static/_next/:path+",
        destination: `${NEXT_PUBLIC_ASTRO_URL}/astro-static/_next/:path+`,
      },
      {
        source: "/astronomical",
        destination: `${NEXT_PUBLIC_ASTRONOMICAL_URL}/astronomical`,
      },
      {
        source: "/astronomical/:path+",
        destination: `${NEXT_PUBLIC_ASTRONOMICAL_URL}/astronomical/:path+`,
      },
      {
        source: "/astronomical-static/_next/:path+",
        destination: `${NEXT_PUBLIC_ASTRONOMICAL_URL}/astronomical-static/_next/:path+`,
      },
      {
        source: '/api/:path*', // Matches any path starting with /api
        destination: `${NEXT_PUBLIC_API_URL}/:path*`, // Proxies to your Express server
      },
    ];
  },
};

module.exports = nextConfig;
