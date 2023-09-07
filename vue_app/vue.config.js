const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  publicPath: "http://localhost:8000/",
  devServer: {
    port: 8000,
  },
  configureWebpack: {
    mode:'development',
    cache:false,
    plugins: [
      new ModuleFederationPlugin({
        name: 'vuecomponents',
        filename: 'remoteEntry.js',
        remotes: {
          remoteComponents: 'remoteComponents@http://localhost:5599/remoteEntry.js'
        },
      })
    ]
  },
  transpileDependencies: true
})
