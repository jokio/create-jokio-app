const chalk = require('chalk')
const getInstallCmd = require('./utils/get-install-cmd')
const output = require('./utils/output')

const program = {
  name: 'create-jokio-app'
}

exports.help = function () {
  return `
    Only ${chalk.green('<project-directory>')} is required.

    If you have any problems, do not hesitate to file an issue:
      ${chalk.cyan('https://github.com/jokio/create-jokio-app/issues/new')}
  `
}

exports.exampleHelp = function () {
  return `Example from https://github.com/jokio/jokio/tree/master/examples/ ${output.param('example-path')}`
}

exports.missingProjectName = function () {
  return `
Please specify the project directory:

  ${chalk.cyan(program.name)} ${chalk.green('<project-directory>')}

For example:

  ${chalk.cyan(program.name)} ${chalk.green('my-jokio-app')}
  ${chalk.cyan(program.name)} ${chalk.cyan('--example custom-server')} ${chalk.green('custom-server-app')}

Run ${chalk.cyan(`${program.name} --help`)} to see all options.
`
}

exports.alreadyExists = function (projectName) {
  return `
Uh oh! Looks like there's already a directory called ${chalk.red(projectName)}. Please try a different name or delete that folder.`
}

exports.installing = function (packages) {
  const pkgText = packages.map(function (pkg) {
    return `    ${chalk.cyan(chalk.bold(pkg))}`
  }).join('\n')

  return `
  Installing npm modules:
${pkgText}
`
}

exports.installError = function (packages) {
  const pkgText = packages.map(function (pkg) {
    return `${chalk.cyan(chalk.bold(pkg))}`
  }).join(', ')

  output.error(`Failed to install ${pkgText}, try again.`)
}

exports.copying = function (projectName) {
  return `
Creating ${chalk.bold(chalk.green(projectName))}...
`
}

exports.start = function (projectName) {
  const cmd = getInstallCmd()

  const commands = {
    install: cmd === 'npm' ? 'npm install' : 'yarn',
    build: cmd === 'npm' ? 'npm run build' : 'yarn build',
    start: cmd === 'npm' ? 'npm run start' : 'yarn start',
    dev: cmd === 'npm' ? 'npm run dev' : 'yarn dev'
  }

  return `
  Next steps:

  $ ${output.cmd(`cd ${projectName}`)}
  $ ${output.cmd(`code .`)}     ${chalk.gray('(If you are using VS Code)')}
`
}
