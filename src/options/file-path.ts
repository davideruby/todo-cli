import { Command } from "commander";
import path from "path";

export const setupFilePathOption = (program: Command): Command => {
  const defaultFilePath = path.join(__dirname, '../../todos.json');
  
  return program
    .option('-f, --file <file>', 'The path to the to-do list file', defaultFilePath)
    .hook('preAction', (thisCommand, actionCommand) => {
      actionCommand.setOptionValue('file', thisCommand.opts().file || defaultFilePath);
    });
}