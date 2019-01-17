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
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
  }
}
