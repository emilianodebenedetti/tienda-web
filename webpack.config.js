const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = { 
  //...
    plugins: [
      new NodePolyfillPlugin()
    ],
    mode: 'development', 
    node: {
        Buffer: false,
        process: false,
    },
    rules: [
      { test: /\.js$/, use: 'js-loader' },
    ],
    resolve: {
        fallback: {
          xyz: path.resolve(__dirname, '/src/options/mariaDB.js'), 
          url: require.resolve('url'),
          crypto: require.resolve('crypto-browserify'), 
          timers: require.resolve('timers-browserify'),
        },
      },
 /*
      /* fallback: {
          xyz: path.resolve(__dirname, '/src/options/mariaDB.js'), 
          url: require.resolve('url'),
          crypto: require.resolve('crypto-browserify'), require.resolve('crypto-browserify' 
          timers: false require.resolve("timers-browserify" 
        }, */
      /* fallback: {
        xyz: path.resolve(__dirname, '/src/options/mariaDB.js'),
        assert: require.resolve('assert'),
        buffer: require.resolve('buffer'),
        console: require.resolve('console-browserify'),
        constants: require.resolve('constants-browserify'),
        crypto: require.resolve('crypto-browserify'),
        domain: require.resolve('domain-browser'),
        events: require.resolve('events'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        punycode: require.resolve('punycode'),
        process: require.resolve('process/browser'),
        querystring: require.resolve('querystring-es3'),
        stream: require.resolve('stream-browserify'),
        string_decoder: require.resolve('string_decoder'),
        sys: require.resolve('util'),
        timers: require.resolve('timers-browserify'),
        tty: require.resolve('tty-browserify'),
        url: require.resolve('url'),
        util: require.resolve('util'),
        vm: require.resolve('vm-browserify'),
        zlib: require.resolve('browserify-zlib'), 
      },*/
}


/*        util: require.resolve("util/"),
          stream: require.resolve("stream-browserify"),
          crypto: require.resolve("crypto-browserify"),
          url: require.resolve("url/"),
          timers: require.resolve("timers-browserify") */