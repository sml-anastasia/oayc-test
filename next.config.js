/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  rewrites: () => {
    return [
      {
        source: "/",
        destination: "/main/index.html"
      }
    ]
  }
}

module.exports = nextConfig
