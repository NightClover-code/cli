"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveCommand = void 0;
//importing command & serve
var commander_1 = require("commander");
var local_api_1 = require("local-api");
//serve command
exports.serveCommand = new commander_1.Command()
    .command('serve [filename]')
    .description('Open a file for editing')
    .option('-p, --port <number>', 'port to run server on', '4005')
    .action(function (filename, _a) {
    if (filename === void 0) { filename = 'notebook.js'; }
    var port = _a.port;
    local_api_1.serve(parseInt(port), filename, '/');
});
