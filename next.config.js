/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['files.stripe.com','picsum.photos','s3-alpha-sig.figma.com']
  },
  experimental:{
    newNextLinkBehavior:true,
  }

}

module.exports = nextConfig
