//https://webpack.js.org/concepts/#output
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //arquivo a ser transpilado
  output: {
    path: path.resolve(__dirname, 'public'), //public é o nome dda página 'destino'
    filename: 'build.js', //lugar que vai receber a versão final (transpilada/traduzida)
  },
  // https://webpack.js.org/configuration/dev-server/#devserver
  // $ npm install -D webpack-dev-server
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
// $ npm run start
