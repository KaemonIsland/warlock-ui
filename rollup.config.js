import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

// prettier-ignore
const external = Object.keys(pkg.dependencies || {}).concat(
  Object.keys(pkg.peerDependencies || {}),
)

/* eslint-disable */
module.exports = {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  external,
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js', 'jsx'],
    }),
    babel({}),
    minify({ comments: false }),
  ],
}
