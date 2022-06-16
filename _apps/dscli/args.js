
let baseArgs = process.argv.filter((arg) => arg !== './main.cljs');

export const args = baseArgs.length === 2
    ? [...baseArgs, '-h'] 
    : baseArgs;