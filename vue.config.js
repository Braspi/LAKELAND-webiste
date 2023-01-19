const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    devtool: false
  },
  transpileDependencies: true,
  publicPath: '/'
})
