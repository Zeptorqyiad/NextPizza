import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: false,

    turbopack: {
        resolveAlias: {
            fs: './empty.ts', 
            dns: './empty.ts',
            net: './empty.ts',
            tls: './empty.ts',
        }
    }
}

export default nextConfig
