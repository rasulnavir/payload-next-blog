import { withPayload } from '@payloadcms/next/withPayload'
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    webpack: (webpackConfig) => {
        webpackConfig.resolve.extensionAlias = {
            '.cjs': ['.cts', '.cjs'],
            '.js': ['.ts', '.tsx', '.js', '.jsx'],
            '.mjs': ['.mts', '.mjs'],
        }

        return webpackConfig
    },
}

export default withPlaiceholder(withPayload(nextConfig, { devBundleServerPackages: false }))
