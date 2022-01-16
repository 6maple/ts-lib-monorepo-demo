import chalk from 'chalk';
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

buildAllPackage(['eslint-plugin-demo']);

interface PackageItem {
  name: string;
  path: string;
  pkg: PackageMeta;
}

interface PackageMeta {
  name: string;
  main: string;
  types: string | string[];
  module: string;
  private: boolean;
}

function buildAllPackage(packages: string[]) {
  const packageList = packages.map((item) => {
    const packagePath = resolvePackagePath(item);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pkg = require(`${packagePath}/package.json`) as PackageMeta;
    return {
      name: item,
      path: resolvePackagePath(item),
      pkg,
    };
  });

  const usingOldDistPackageList = packageList.filter(
    (item) => !checkPackageNeedToBuild(item),
  );
  console.log(
    chalk.cyan(
      `using old dist ${chalk.yellow(
        usingOldDistPackageList.map(({ name }) => name).join(', '),
      )}`,
    ),
  );

  const packageListToBuild = packageList.filter((item) =>
    checkPackageNeedToBuild(item),
  );
  console.log(
    chalk.cyan(
      `ready to build ${chalk.yellow(
        packageListToBuild.map(({ name }) => name).join(', '),
      )}`,
    ),
  );
  packageListToBuild.forEach((item) => {
    buildPackage(item);
  });
}

function resolvePackagePath(packageName: string) {
  return path.resolve(__dirname, `../../packages/${packageName}`);
}

function checkPackageNeedToBuild(item: PackageItem) {
  const { path: packagePath, pkg } = item;
  const distPathList = [pkg.module, pkg.main, pkg.types].flat();
  for (const distPath of distPathList) {
    if (!existsSync(path.resolve(packagePath, distPath))) {
      return true;
    }
  }
  return false;
}

function buildPackage(item: PackageItem) {
  const { name } = item.pkg;
  console.log();
  console.log(chalk.cyan(`building ${chalk.yellow(name)}`));
  execSync('pnpm run build', { cwd: item.path, stdio: 'inherit' });
  console.log();
  console.log(chalk.cyan(`${chalk.yellow(name)} build finished`));
  console.log(
    chalk.cyan('===================================================='),
  );
}
