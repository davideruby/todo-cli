import { Command } from "commander";
import { readTodos } from "../utils/file-handler";

export const setupListCommand = (program: Command): Command => {
  return program
    .command('list')
    .description('List all to-do tasks')
    .action(({ file }) => {
        const todos = readTodos(file);

        console.log('Your to-do List:');
        todos.forEach((todo, idx) => {
            const status = todo.completed ? '[X]' : '[ ]';
            const taskDescription = [`${idx + 1}.`, todo.id, status, todo.task].join(' ');
            console.log(taskDescription)
        });
    });
}