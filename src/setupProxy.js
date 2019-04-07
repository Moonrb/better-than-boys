const proxy = require('http-proxy-middleware'); //模块 vue ,react 之所以支持反向代理

module.exports = function(app) {
    app.use(proxy('/ajax', {
        target: 'http://m.maoyan.com',
        host: 'm.maoyan.com',
        changeOrigin:true
    }));
};
