const isProduction = process.env.NODE_ENV === 'production'
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    ...(isProduction ? {
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          cssDeclarationSorter: true,
          reduceIdents: false,
          mergeIdents: false,
          autoprefixer: false,
        }]
      }
    } : {})
  }
}
