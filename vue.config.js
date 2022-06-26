const path = require("path")
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	publicPath: './',

	configureWebpack: (config) => {
		config.resolve = {
			extensions:['.js','.json','.vue'],
			// 别名
			alias:{
				"@":path.resolve(__dirname,"./src")
			}
		}
	}
})
