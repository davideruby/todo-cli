import { Todo } from "../types/todo";
import * as fs from 'fs';
import * as path from 'path';

export const ENCODING = 'utf8';

export const readTodos = (filePath: string): Array<Todo> => {
  const data = fs.readFileSync(filePath, ENCODING);
  return JSON.parse(data);
}

export const writeTodos = (filePath: string, todos: Array<Todo>): void => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), ENCODING);
}

export const createTodosFileIfNotExists = (filePath: string): void => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', ENCODING);
  }
}
