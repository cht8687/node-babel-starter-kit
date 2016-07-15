import fs from 'fs';

export function index() {
  return true;
}

function processCommandLine(argv) {
  const [a, b, ...args] = argv;
  if (args.length === 0) {
    console.error("Please type correct command: babel-node index.js");
  } else {
    console.log("Hello world");
  }
};

// Program main entry point:
processCommandLine(process.argv);
