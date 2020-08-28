const path = require('path')

module.exports = {
  devServer: {
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        views: path.join('@/views'),
        components: path.join('@/components'),
        assets: path.join('@/assets'),
        network: path.join('@/network'),
        common: path.join('components/common')
      }
    }
  }
}
