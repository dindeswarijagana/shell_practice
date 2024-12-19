let currDirectory = "~";
const promptText = "nutshell ";

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
  }
}

while (true) {
  const runningCommand = prompt(promptText + currDirectory + " %");
  const resultOfRunningCommand = runCommand(runningCommand);

  if (resultOfRunningCommand !== undefined) {
    console.log(resultOfRunningCommand);
  }
}