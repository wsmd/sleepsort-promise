import babel from 'rollup-plugin-babel'
const info = require('./package.json');

const config = {
  entry: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        [ 'env', {
          targets: {
            browsers: ['last 2 versions', 'safari >= 7']
          },
          'modules': false
        }]
      ]
    })
  ],
  targets: [{
    dest: info.main,
    format: 'umd',
    moduleName: 'sleepSort'
  }, {
    dest: info.module,
    format: 'es'
  }]
}

export default config
