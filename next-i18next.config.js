const path = require('path')
module.exports = {
    i18n: {
        locales: ['en', 'jp'],
        defaultLocale: 'en',
        localeDetection: false
    },
    localePath: path.resolve('./public/locales'),
    output: 'export',
    basePath: '/the-website'

}