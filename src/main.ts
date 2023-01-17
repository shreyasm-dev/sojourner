import sourceMapSupport from 'source-map-support';
import { readFileSync } from 'fs';
import { program } from 'commander';
import Conf from 'conf';

sourceMapSupport.install();

const conf = new Conf({
  projectName: 'sojourner',
  schema: {
    path: {
      type: 'array',
      items: {
        type: 'string',
      },
      default: [],
    },
  },
});

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version);

program
  .command('add <path>')
  .description('Add a path')
  .action((path) => {
    const paths = conf.get('path') as string[];
    if (!paths.includes(path)) {
      paths.push(path);
    } else {
      console.error(`Path ${path} already exists`);
      process.exit(1);
    }

    conf.set('path', paths);
  });

program
  .command('remove <path>')
  .description('Remove a path')
  .action((path) => {
    const paths = conf.get('path') as string[];
    if (paths.includes(path)) {
      paths.splice(paths.indexOf(path), 1);
    } else {
      console.error(`Path ${path} does not exist`);
      process.exit(1);
    }

    conf.set('path', paths);
  });

program
  .command('list')
  .description('List all paths')
  .action(() => {
    console.log(conf.get('path'));
  });

program
  .command('clear')
  .description('Clear all paths')
  .action(() => {
    console.log(`Clearing these paths:\n${conf.get('path')}`);
    conf.clear();
  });

program
  .command('path')
  .description('Print the path')
  .action(() => {
    console.log((conf.get('path') as string[]).join(':'));
  });

program.parse(process.argv);
