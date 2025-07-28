#!/usr/bin/env node

import { Command } from "commander";
import { setupAddCommand, setupListCommand, setupDeleteCommand, setupCompleteCommand } from "./commands";
import { setupFilePathOption } from "./options";

function main() {
  const program = new Command();

  program
    .name('todo')
    .description('A simple CLI to-do list manager')
    .version('1.0.0');

  setupFilePathOption(program);

  setupAddCommand(program);
  setupListCommand(program);
  setupDeleteCommand(program);
  setupCompleteCommand(program);

  program.parse(process.argv);
}

main();
