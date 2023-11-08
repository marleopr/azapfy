/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://homologacao3.azapfy.com.br/api/:path*',
            },
        ];
    },
};
