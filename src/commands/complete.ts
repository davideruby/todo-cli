import { Command } from "commander";
import { readTodos, writeTodos } from "../utils/file-handler";

export const setupCompleteCommand = (program: Command): Command => {
  return program
    .command('complete <id>')
    .description('Complete a to-do task')
    .action((id: string, { file }: any) => {
      const todos = readTodos(file);
      const toComplete = todos.find((todo) => todo.id === id);

      if (!toComplete) {
        console.error(`Error: Task with ID ${id} not found in "${file}".`);
        return;
      }

      toComplete.completed = true;
      writeTodos(file, todos);
      console.log(`Task ${toComplete.task} completed`);
    });
}