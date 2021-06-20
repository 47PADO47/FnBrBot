const { text, style } = require('./console-colors');

module.exports = class Logger {
    log(str) {
        console.log(`[${text.magenta}➤${style.reset}]  ${str}`);
    }

    success(str) {
        console.log(`[${text.green}✔${style.reset}]  ${str}`);
    }

    error(str) {
        console.log(`[${text.red}✖${style.reset}]  ${str}`);
    }

    warn(str) {
        console.log(`[${text.yellow}⚠${style.reset}]  ${str}`);
    }

    debug(str) {
        console.log(`[${text.cyan}🔍${style.reset}]  ${str}`);
    }
}