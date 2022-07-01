const path = require("path");
const { defineConfig } = require("@vue/cli-service");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    publicPath: "./", // 静态文件跟目录
    outputDir: "dist",
    assetsDir: "static", //dist的js css img 那些全部放到static下
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,

    // 代理
    devServer: {
        port:8088,
        proxy: {
            "/api": {
                target: "http://localhost:3000/",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": "/api",
                },
            },
            // [process.env.VUE_APP_BASE_API]: {
            //     target: `http://localhost:3000/`,
            //     changeOrigin: true,
            //     secure: false,
            //     pathRewrite: {
            //         ["^" + process.env.VUE_APP_BASE_API]: "",
            //     },
            // },
        },
    },
    configureWebpack: (config) => {
        config.resolve = {
            extensions: [".js", ".json", ".vue"],
            // 别名
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        };
    },
    chainWebpack(config) {
        config.when(process.env.NODE_ENV !== "development", (config) => {
            config.optimization.splitChunks({
                maxInitialRequests: 10,
                chunks: "all",
                cacheGroups: {
                    libs: {
                        name: "chunk-libs",
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: "initial", // only package third parties that are initially dependent
                    },
                    swiper: {
                        name: "chunk-swiper", // split elementUI into a single package
                        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                        test: /[\\/]node_modules[\\/]_?swiper(.*)/, // in order to adapt to cnpm
                    },
                    jquery: {
                        name: "chunk-jquery",
                        priority: 20,
                        test: /[\\/]node_modules[\\/]_?jquery(.*)/,
                    },
                    axios: {
                        name: "chunk-axios",
                        priority: 20,
                        test: /[\\/]node_modules[\\/]_?axios(.*)/,
                    },
                    commons: {
                        name: "chunk-commons",
                        test: resolve("src/components"), // can customize your rules
                        minChunks: 3, //  minimum common number
                        priority: 5,
                        reuseExistingChunk: true,
                    },
                },
            });
        });
    },
});
