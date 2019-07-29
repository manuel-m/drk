import { terser } from 'rollup-plugin-terser';
import prettier from 'rollup-plugin-prettier';

const external = [
  'buffer',
  'crypto',
  'events',
  'fs',
  'http',
  'https',
  'path',
  'net',
  'querystring',
  'stream',
  'string_decoder',
  'tty',
  'url',
  'util',
  'zlib',
];

export default [
  {
    input: 'src/app.index.js',
    onwarn(warning, warn) {
      if (warning.code === 'EVAL') return;

      warn(warning);
    },
    output: {
      file: 'app.js',
      format: 'cjs',
      interop: false,
    },
    external,
    plugins: [
      terser({
        mangle: false,
      }),
      prettier({
        tabWidth: 2,
        singleQuote: true,
        parser: 'babel',
      }),
    ],
  },
];
