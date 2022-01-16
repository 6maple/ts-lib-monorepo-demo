# ts-lib-monorepo-demo

This repo is a simple typescript lib monorepo demo.

## References

> This project is heavily inspired by the following awesome projects.

- [vuejs/vue-next](https://github.com/vuejs/vue-next)
- [vueuse/vueuse](https://github.com/vueuse/vueuse)
- [vitejs/vite](https://github.com/vitejs/vite)

## Features

- [x] husky

  > **pre-commit:** lint-staged
  >
  > **commit-msg:** verify commit msg

- [x] eslint

- [x] prettier

- [x] pnpm

- [x] monorepo

- [x] build typescript lib by rollup and esbuild

- [ ] test

  > Is under consideration.
  >
  > Maybe you can finished by yourself.

## How to use

1. Run `pnpm i` to install dependencies.
2. Run `pnpm run build-packages` to build packages specified in `scripts\build\build-packages.ts`.

## License

MIT
