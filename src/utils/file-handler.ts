import { Todo } from "../types/todo";
import * as fs from 'fs';

const ENCODING = 'utf8';

export const readTodos = (filePath: string): Array<Todo> => {
  createTodosFileIfNotExists(filePath);

  const data = fs.readFileSync(filePath, ENCODING);
  return JSON.parse(data);
}

export const writeTodos = (filePath: string, todos: Array<Todo>): void => {
  createTodosFileIfNotExists(filePath);
  
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), ENCODING);
}

export const createTodosFileIfNotExists = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', ENCODING);
  }
}
