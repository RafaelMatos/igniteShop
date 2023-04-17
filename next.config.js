/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['files.stripe.com','picsum.photos']
  },
  experimental:{
    newNextLinkBehavior:true,
  }

}

module.exports = nextConfig
