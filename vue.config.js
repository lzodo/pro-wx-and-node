const path = require("path")
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	publicPath: './',


	configureWebpack: (config) => {
		config.resolve = {
			extensions: ['.js', '.json', '.vue'],
			// 别名
			alias: {
				"@": path.resolve(__dirname, "./src")
			}
		}
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
