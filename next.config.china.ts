import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 国内部署优化配置
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 图片优化 - 使用国内CDN
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'unpkg.com',
      // 国内CDN替代
      'cdn.bootcdn.net',
      'lf3-cdn-tos.bytescm.com',
      'p3-armor.byteimg.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // 国内网络优化
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // 静态资源优化
  assetPrefix: process.env.NODE_ENV === 'production' ? '/static' : '',

  // CDN配置
  env: {
    // 使用国内字体服务
    FONT_SERVICE: 'https://fonts.googleapis.com',
    // 替换为: 'https://fonts.font.im'

    // 图片服务
    IMAGE_SERVICE: 'https://images.unsplash.com',
    // 可替换为: 'https://source.unsplash.com'
  },

  // 输出配置
  output: 'standalone',

  // 国内访问优化
  poweredByHeader: false,
  compress: true,

  // 重定向配置
  async redirects() {
    return [
      // 可以添加域名重定向规则
    ]
  },

  // 头部安全配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // 国内合规头部
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:;",
          },
        ],
      },
    ]
  },
};

export default nextConfig;