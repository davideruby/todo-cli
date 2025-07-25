import { Command } from "commander";
import { readTodos, writeTodos } from "../utils/file-handler";

export const setupDeleteCommand = (program: Command): Command => {
  return program
    .command('delete <id>')
    .description('Delete a to-do task')
    .action((id: string, { file }: any) => {
      let todos = readTodos(file);
      
      if (!todos.find((todo) => todo.id === id)) {
        console.error(`Error: Task with ID ${id} not found in "${file}".`);
        return;
      }
      
      todos = todos.filter((todo) => todo.id !== id);

      writeTodos(file, todos);
      console.log(`Task with ID ${id} deleted from "${file}".`);
    });
}