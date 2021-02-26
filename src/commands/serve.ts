//importing command & serve & path
import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';
//serve command
export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action((filename = 'notebook.js', { port }: { port: string }) => {
    //getting file inside folder if user specifies one
    const dir = path.join(process.cwd(), path.dirname(filename));
    serve(parseInt(port), path.basename(filename), dir);
  });
