var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.module.rule('pdf')
    .test(/\.(pdf)(\?.*)?$/)
    .use('file-loader')
    .loader('file-loader')
    .options({
      name: 'assets/pdf/[name].[hash:8].[ext]'
    })
  },
 configureWebpack: config => {
   if (process.env.NODE_ENV !== 'production') return
   return {
     plugins: [
       new PrerenderSpaPlugin(
         // Absolute path to compiled SPA
         path.resolve(__dirname, 'dist'),
         // List of routes to prerender
         [ '/', '/brands', '/drivers'],
       ),
     ]
   }
 }
}