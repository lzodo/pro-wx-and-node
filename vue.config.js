const path = require("path")
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	publicPath: './', //静态文件跟目录
	outputDir:'dist',


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
        config.optimization.splitChunks({
            chunks: "all",
            maxInitialRequests: 10,
            cacheGroups: {
                libs: {
                    name: "chunk-libs",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: "initial", // only package third parties that are initially dependent
                },
                mintUI: {
                    name: "chunk-mint-ui",
                    priority: 25,
                    test: /[\\/]node_modules[\\/]_?mint-ui(.*)/,
                },
                Jquery: {
                    name: "chunk-jquery", // split elementUI into a single package
                    priority: 25, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                    test: /[\\/]node_modules[\\/]_?jquery(.*)/, // in order to adapt to cnpm
                },
                Echarts: {
                    name: "chunk-echarts",
                    priority: 25,
                    test: /[\\/]node_modules[\\/]_?echarts(.*)/,
                },
                swiper: {
                    name: "chunk-swiper",
                    priority: 25,
                    test: /[\\/]node_modules[\\/]_?swiper(.*)/,
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
	},
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
