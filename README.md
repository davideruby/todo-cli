# Todo-cli

A simple CLI application built with TypeScript for managing your to-do tasks. This tool offers a quick and easy way to add, list, mark as complete, and delete tasks directly from your terminal. It stores your tasks persistently in a JSON file, providing a lightweight solution for personal task organization.

## Table of Contents

- [About This Project](#about-this-project)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
  - [Global Options](#global-options)
  - [Commands](#commands)
    - [`todo add <task>`](#todo-add-task)
    - [`todo list`](#todo-list)
    - [`todo complete <id>`](#todo-complete-id)
    - [`todo delete <id>`](#todo-delete-id)
- [Development](#development)
- [Contributing](#contributing)

## About This Project

`Todo-cli` is a toy project developed primarily as an experiment and learning exercise. It's a command-line tool built with `TypeScript` and the `Commander.js` library, designed to manage your to-do tasks, which are persistently stored in a **JSON** file.

## Installation & Setup

To get this CLI up and running on your system, ensure you have installed `tsc` and then follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/davideruby/todo-cli.git
cd todo-cli
```

2. Install dependencies:

```bash
npm install
```

3. Run the setup script:

```bash
npm run setup
```

This script compiles the `TypeScript` code, creates a global symbolic link to the `todo` command, and grants execution permissions. After running, you can use the `todo` command globally.

## Usage

The `todo-cli` provides a set of commands to manage your tasks.

### Global Options

The `--file (-f)` option can be used with any command to specify a custom JSON file for your to-do list. This allows you to manage multiple separate lists.

**Default File**: If `--file` is not specified, the CLI will use `todos.json` in your current working directory.

**Example with custom file**:

```bash
todo add "Review project proposal" --file work-tasks.json
todo list --file work-tasks.json
```

### Commands

#### `todo add <task>`

Adds a new to-do task to your list.

**Description**: Creates a new task with the given description and assigns it a unique ID.

**Arguments**:

- `<task>`: The description of the task you want to add (e.g., "Buy groceries").

**Usage Examples**:

```bash
todo add "Buy milk and eggs"
todo add "Call plumber for leaky faucet" --file home-todos.json
```

#### `todo list`

Lists all tasks in your to-do list.

**Description**: Displays all tasks with their status (completed or pending) and description. Task IDs are hidden by default.

**Options**:

- `--show-ids`: Displays the unique ID for each task.

**Usage Examples**:

```bash
todo list
```

**Output**:

```bash
Your to-do List:
1.      [X]     one
2.      [ ]     two
3.      [ ]     three
```

```bash
todo list --show-ids
```

**Output**:

```bash
Your to-do List:
1.      [X]     one     43504dd2-4483-48d8-9a2a-09a10837cf83
2.      [ ]     two     ea8b73b7-e40f-41a7-ba18-5d0df462ac41
3.      [ ]     three   1b9fd388-f903-4cfb-870f-bfa8d504252c
```

#### `todo complete <id>`

Marks a specific task as completed.

**Description**: Changes the status of the task identified by its ID to "completed".

**Arguments**:

- `<id>`: The ID of the task you wish to mark as complete.

**Usage Examples**:

```bash
todo complete 43504dd2-4483-48d8-9a2a-09a10837cf83
todo complete 43504dd2-4483-48d8-9a2a-09a10837cf83 --file project-alpha.json
```

#### `todo delete <id>`

Deletes a task from your list.

**Description**: Permanently removes the task identified by its ID from the list.

**Arguments**:

- `<id>`: The ID of the task you wish to delete.

**Usage Examples**:

```bash
todo delete 43504dd2-4483-48d8-9a2a-09a10837cf83
todo delete 43504dd2-4483-48d8-9a2a-09a10837cf83 --file old-tasks.json
```

## Development

For local development, you can use the `start` command to directly execute the TypeScript code whenever you make changes. This will run `tsx`, executing directly your Typescript code:

```bash
npm run start -- add four --file project-alpha.json 
```

## Contributing

Feel free to explore the code, open issues, or submit pull requests if you have suggestions or improvements for this toy project!
