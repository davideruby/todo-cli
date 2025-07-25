import { Command } from "commander";
import { readTodos, writeTodos } from "../utils/file-handler";
import { v4 } from "uuid";
import { Todo } from "../types/todo";

export const setupAddCommand = (program: Command): Command => {
  return program
    .command('add <task>')
    .description('Add a new to-do task')
    .action((task: string, { file }) => {
      const todos = readTodos(file);

      const newTodo: Todo = {
        id: v4(),
        task: task,
        completed: false,
      };
      todos.push(newTodo);

      writeTodos(file, todos);
      console.log(`Task added: "${task}" (ID: ${newTodo.id})`);
    });
};