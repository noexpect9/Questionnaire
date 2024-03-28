module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:8099/api'
    }
  },
  webpack: {
    configure: (webpackConfig) => {
      if(webpackConfig.mode === 'production') {
        if(webpackConfig.optimization === null) {
          webpackConfig.optimization = {}
        }
        webpackConfig.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            antd: {
              name: 'antd-chunk',
              test: /antd/,
              priority: 100,
            },
            reactDom: {
              name: 'react-dom-chunk',
              test: /react-dom/,
              priority: 99,
            },
            vendors: {
              name: 'vendors-chunk',
              test: /node_modules/,
              priority: 98,
            }
          }
        }
      }
    }
  }
}