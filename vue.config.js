const path = require("path")
const { defineConfig } = require('@vue/cli-service')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: './', //静态文件跟目录
    outputDir: 'dist',


    // 代理
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }

        }
    },
    configureWebpack: (config) => {
        config.resolve = {
            extensions: ['.js', '.json', '.vue'],
            // 别名
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        }
    },
    chainWebpack(config) {
        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .optimization.splitChunks({
                            maxInitialRequests: 10,
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                swiper: {
                                    name: 'chunk-swiper', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?swiper(.*)/ // in order to adapt to cnpm
                                },
                                jquery: {
                                    name: 'chunk-jquery',
                                    priority: 20, 
                                    test: /[\\/]node_modules[\\/]_?jquery(.*)/ 
                                },
                                axios: {
                                    name: 'chunk-axios',
                                    priority: 20, 
                                    test: /[\\/]node_modules[\\/]_?axios(.*)/ 
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })

                }
            )
    }
    // chVVainWebpack: config => {
    // 	if (process.env.NODE_ENV === 'development') {
    // 		config.plugin('BundleAnalyzerPlugin')
    // 			.use(BundleAnalyzerPlugin)
    // 	}
    // 	// 新增externals配置
    // 	config.set('externals', {
    // 		vue: 'Vue',
    // 		'vuex': 'Vuex',
    // 		'vue-router': 'VueRouter',
    // 		'element-ui': 'ELEMENT',
    // 		'echarts': 'echarts'
    // 	})
    // }
})
