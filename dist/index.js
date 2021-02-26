"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importing commands
var commander_1 = require("commander");
var serve_1 = require("./commands/serve");
//executing
commander_1.program.addCommand(serve_1.serveCommand);
commander_1.program.parse(process.argv);
