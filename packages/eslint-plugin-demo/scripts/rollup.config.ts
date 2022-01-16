import { defineDTSBundle, defineESBundle } from '../../../shared/rollup-helper';
import { name } from '../package.json';
export default [defineESBundle(name), defineDTSBundle(name)];
