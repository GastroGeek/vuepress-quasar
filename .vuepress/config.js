module.exports = {
  title: 'VuePress + Quasar',
  chainWebpack (config) {
    config.resolve.alias.set('@variables', require('path').resolve(__dirname, 'styles/variables.styl'))
  }
}