module.exports = {
    //...
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', 'ts']
    },
    test: /\.(html)$/,
    use: {
      loader: 'html-loader',
      options: {
        attrs: [':data-src']
      }
    }
  };