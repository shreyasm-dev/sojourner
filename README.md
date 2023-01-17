# Sojourner

Convenient PATH management

## Installation

```bash
npm i -g sojourner
```

## Usage

```bash
Usage: sojourner [options] [command]

Convenient PATH management

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  add <path>      Add a path
  remove <path>   Remove a path
  list            List all paths
  clear           Clear all paths
  path            Print the path
  help [command]  display help for command
```

You can add this to your preferred rc file to have it run on shell startup.

```bash
PATH="$PATH":$(sojourner path)
```

## License

This project is licensed under the MIT license.
