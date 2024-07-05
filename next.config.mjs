import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
