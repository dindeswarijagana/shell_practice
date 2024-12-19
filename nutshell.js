let currDirectory = "~";
const promptText = "nutshell ";
const files = [];

const runLs = function () {
  return files.join("\n");
}

const runTouch = function (args) {
  files.push(args);
  console.log(files);
  console.log("file created");
}

const runEcho = function (args) {
  return args.join(" ");
}

const runCd = function ([args]) {
  currDirectory = args;
}

const runCommand = function (runningCommand) {
  const [command, ...args] = runningCommand.split(" ");

  switch (command) {
    case "echo": return runEcho(args);
    case "cd": return runCd(args);
    case "touch": return runTouch(...args);
    case "ls": return runLs();
  }
}

while (true) {
  const runningCommand = prompt(promptText + currDirectory + " %");
  const resultOfRunningCommand = runCommand(runningCommand);

  if (resultOfRunningCommand !== undefined) {
    console.log(resultOfRunningCommand);
  }
}