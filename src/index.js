const os = require("os");

console.log("Hello!");

const message = `
### System Infos ###
* arch: ${os.arch()}
* platform: ${os.platform()}
* release: ${os.release()}
* kernel version: ${os.version()}
* mem: ${os.totalmem()}
* cpus: ${JSON.stringify(os.cpus())}
`;

console.log(`\n${message}\n`);