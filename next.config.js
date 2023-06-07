/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // thêm máy chủ đang lưu ảnh
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname: '/free-photo/**',
            },
        ],
    },
};

module.exports = nextConfig;
