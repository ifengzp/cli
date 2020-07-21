const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");

const clone = async (repo, desc) => {
  const download = promisify(require("download-git-repo"));
  const ora = require("ora");
  const process = ora(`下载中.....${repo}`);
  process.start();
  await download(repo, desc);
  process.succeed();
};

const spawn = async (...args) => {
  const { spawn } = require("child_process");
  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
};
const log = (content) => console.log(chalk.green(content));
module.exports = async (name) => {
  // 打印欢迎画面
  clear();
  const data = await figlet("ifengzp cli");
  log(data);
  // 创建项目
  log(`🚀创建项目:` + name);
  await clone("github:ifengzp/steam-game-ui", name);
  await spawn("cnpm", ["install"], { cwd: `./${name}` });
  log(`
🎉项目创建完成：
To get Start:
===========================
    cd ${name}
===========================
            `);
};
