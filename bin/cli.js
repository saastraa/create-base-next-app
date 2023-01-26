#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.log(`Failed to execute ${command}`, error);
    return false;
  }

  return true;
};

const repositoryName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/saastraa/create-base-next-app ${repositoryName}`;

const installDepsCommand = `cd ${repositoryName} && npm install`;

console.log(`Cloning repository ${repositoryName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
  process.exit(-1);
}

console.log(`Installing dependencies for ${repositoryName}`);

const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) {
  process.exit(-1);
}

console.log(`Successfully installed dependencies for ${repositoryName}`);

console.log(`Ready to start - cd ${repositoryName} && npm run dev`);
