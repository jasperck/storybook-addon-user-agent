import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize';

const config = {
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    filesize(),
  ],
  external: ['react', '@storybook/addons', '@storybook/core-events', '@storybook/components'],
};

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'es',
    },
    ...config,
  },
  {
    input: 'src/register.js',
    output: {
      file: 'dist/register.js',
      format: 'es',
    },
    ...config,
  },
];
