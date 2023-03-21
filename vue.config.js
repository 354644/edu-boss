module.exports = {
  // transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/variables.scss";`
      }
    }
  },
  // 配置代理
  devServer: {
    proxy: {
      '/boss': {
        target: 'http://eduboss.lagou.com',
        changeOrigin: true // 请求头的host配置为target
        // pathRewrite: {
        //   '^/api': ''
        // }
      },
      '/front ': {
        target: 'http://edufront.lagou.com',
        changeOrigin: true
      }
    }
  }
}
