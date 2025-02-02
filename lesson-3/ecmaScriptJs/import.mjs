import bool, * as exportedData from './export.mjs'
import chalk from 'chalk';


console.log(exportedData.str, exportedData.sum, exportedData.default);
console.log(bool);

console.log(
    chalk.bgBlueBright(exportedData.str), 
    chalk.redBright(exportedData.sum), 
    chalk.greenBright(exportedData.default));
