const path = require('path')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          // load snap.svg cause it's not commonsjs based
          test: require.resolve('snapsvg/dist/snap.svg.js'),
          use: 'imports-loader?this=>window,fix=>module.exports=0',
        },
      ],
    },
    resolve: {
      alias: {
        snapsvg: 'snapsvg/dist/snap.svg.js',
      },
    },
  },
  chainWebpack: config => {
    // svg-inline-loader
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader')

    // sass-resource-loader
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            path.resolve(__dirname, 'src/styles/_variables.scss'),
            path.resolve(__dirname, 'src/styles/_mixins.scss'),
          ]
        })
        .end()
    })
  }
}
