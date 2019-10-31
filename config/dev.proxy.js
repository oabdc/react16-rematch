module.exports = {
    _proxy: {
        '/api': {
            target: 'https://hunter.lagou.com',
            secure: false,
            changeOrigin: true,
        },
    },
};
