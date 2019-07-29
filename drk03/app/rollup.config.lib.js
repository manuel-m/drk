import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
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
    input: 'node_modules/express/lib/express.js',
    output: {
      file: 'lib/express.esm.js',
      format: 'esm',
    },
    external,
    onwarn(warning, warn) {
      // skip certain warnings
      if (warning.code === 'EVAL') return;

      // Use default for everything else
      warn(warning);
    },
    plugins: [
      replace({
        'accepts/node_modules/accepts/node_modules/negotiator': 'negotiator',
        'accepts/node_modules/accepts/node_modules/mime-types': 'mime-types',
      }),
      json(),
      resolve({ preferBuiltins: true, browser: false }),
      common(),
      terser({
        mangle: false,
        compress: {
          ecma: 6,
        },
        output: {
          ecma: 6,
        },
      }),
      prettier({
        tabWidth: 2,
        singleQuote: true,
        parser: 'babel',
      }),
    ],
  },
];
