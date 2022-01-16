import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import type { RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import esbuild, { Options as ESBuildOptions } from 'rollup-plugin-esbuild';

export const defineBundleBaseConfig = (config: RollupOptions) => ({
  input: './src/index.ts',
  ...config,
});

export const defineESBundle = (
  name: string,
  config?: RollupOptions,
  options?: ESBuildOptions,
): RollupOptions => {
  return defineBundleBaseConfig({
    plugins: [esbuild(options), nodeResolve(), commonjs(), json()],
    output: [
      {
        file: `dist/${name}.js`,
        format: 'es',
        sourcemap: true,
      },
    ],
    ...config,
  });
};

export const defineDTSBundle = (
  name: string,
  config?: RollupOptions,
): RollupOptions => {
  return defineBundleBaseConfig({
    plugins: [dts()],
    output: {
      file: `dist/${name}.d.ts`,
      format: 'es',
    },
    ...config,
  });
};
