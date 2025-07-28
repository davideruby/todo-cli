import { Command } from "commander";
import { readTodos } from "../utils/file-handler";

export const setupListCommand = (program: Command): Command => {
  return program
    .command('list')
    .description('List all to-do tasks')
    .option('--show-ids', 'When printing, show all labels (default hide ids)')
    .action(({ file, showIds }) => {
        const todos = readTodos(file);
        
        console.log('Your to-do List:');
        todos.forEach((todo, idx) => {
            const status = todo.completed ? '[X]' : '[ ]';
            const id = showIds ? todo.id : '';
            const taskDescription = [`${idx + 1}.`, status, todo.task, id].join('\t');
            console.log(taskDescription)
        });
    });
}