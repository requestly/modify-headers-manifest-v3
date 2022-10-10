import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';

const OUTPUT_DIR = 'build';

const manifestSubstitutions = {
  __VERSION__: packageJson.version,
};

export default [
  {
    input: 'src/background.ts',
    output: {
      file: `${OUTPUT_DIR}/background.js`,
      format: 'iife',
    },
    plugins: [
      typescript(),
      json(),
      terser(),
      copy({
        targets: [
          { src: 'resources', dest: OUTPUT_DIR },
          {
            src: `src/manifest.json`,
            dest: OUTPUT_DIR,
            rename: 'manifest.json',
            transform: (manifestTemplate) => {
              let manifest = manifestTemplate.toString();
              Object.entries(manifestSubstitutions).forEach(([variable, value]) => {
                manifest = manifest.replace(new RegExp(variable, 'g'), value);
              });
              return manifest;
            },
          },
        ],
      }),
    ],
  },
];
