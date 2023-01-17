import sourceMapSupport from 'source-map-support';
import { readFileSync } from 'fs';
import { program } from 'commander';

sourceMapSupport.install();

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version);

program.parse(process.argv);
