export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: ['border', 'box-shadow', 'background-position'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
}
