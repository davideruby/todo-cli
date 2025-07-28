import { Command } from "commander";
import path from "path";
import { createTodosFileIfNotExists } from "../utils/file-handler";

export const setupFilePathOption = (program: Command): Command => {
  const defaultFilePath = path.join(__dirname, '../../todos.json');

  return program
    .option('-f, --file <file>', 'The path to the to-do list file', defaultFilePath)
    .hook('preAction', (thisCommand, actionCommand) => {
      const filePath = thisCommand.opts().file || defaultFilePath;
      actionCommand.setOptionValue('file', filePath);

      createTodosFileIfNotExists(filePath);
    });
}