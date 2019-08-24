import { eslint } from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify'
import babel from 'rollup-plugin-babel'

module.exports = {
    plugins: [
        eslint({
            throwOnError: true,
        }),
        nodeResolve({
            jsnext: true,
            main: true,
        }),
        commonjs({
            exclude: 'node_modules/**',
            extensions: [ '.js', 'jsx' ]
        }),
        minify({}),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    input: 'src/index.js',
    output: {
        file: [ 'index.js', 'index.esm.js' ],
        format: 'esm'
    }
}