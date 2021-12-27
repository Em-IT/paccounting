const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  boldEnd: "\x1b[22m",
  italicEnd: "\x1b[23m",
  underscoreEnd: "\x1b[24m",
  reverseEnd: "\x1b[27m",
  hiddenEnd: "\x1b[28m",
  
  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    crimson: "\x1b[38m", // Scarlet
    gray: "\x1b[90m",

    end: "\x1b[39m",

    bright: {
      red: "\x1b[91m",
      green: "\x1b[92m",
      yellow: "\x1b[93m",
      blue: "\x1b[94m",
      magenta: "\x1b[95m",
      cyan: "\x1b[96m",
      white: "\x1b[97m",
    },
  },
  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    crimson: "\x1b[48m",
    gray: "\x1b[100m",

    end: "\x1b[49m",

    bright: {
      red: "\x1b[101m",
      green: "\x1b[102m",
      yellow: "\x1b[103m",
      blue: "\x1b[104m",
      magenta: "\x1b[105m",
      cyan: "\x1b[106m",
      white: "\x1b[107m",
    },
  },
};

const getCurrentTime = () => {
  return (new Date())
    .toTimeString()
    .substr(0, 8);
};

export const logApi = (text: string, ...otherArgs: any) => {
  // console.log('%cAPI Call: ' ,text, "color: blue; font-weight: bold;");
  console.log(
    colors.bg.blue, colors.fg.white, colors.bold,
    'API Call', colors.bg.end, colors.boldEnd,
    colors.bg.gray, colors.fg.white, getCurrentTime(), colors.reset,
    text, ...otherArgs,
  );
};

export const logInfo = (text: string, ...otherArgs: any) => {
  // console.log('%cInfo:%c ' + text, "color: cyan; font-weight: bold;");
  console.log(
    colors.bg.cyan, 'Info', colors.bg.end,
    colors.fg.cyan, colors.italic, text, ...otherArgs,
    colors.reset,
  );
};

export const logSuccess = (text: string, ...otherArgs: any) => {
  // console.log("%c" + text, "color: green; font-weight: bold;");
  console.log(
    colors.fg.green, colors.bold, text, ...otherArgs,
    colors.reset,
  );
};

export const logError = (text: string, ...otherArgs: any) => {
  // console.log("%c" + text + "%c", "color: red; font-weight: bold;");
  console.log(
    colors.bg.red, colors.fg.white, colors.bold, 'Error',
    colors.bg.end, colors.boldEnd,
    colors.bg.gray, colors.fg.white, getCurrentTime(), colors.bg.end,
    colors.fg.red, text, colors.reset, ...otherArgs,
  );
};

export const logWarn = (text: string, ...otherArgs: any) => {
  // console.log("%c" + text + "%c", "color: orange; font-weight: bold;");
  console.log(
    colors.fg.yellow, colors.bold, colors.italic, text, ...otherArgs,
    colors.reset,
  );
};

export const logLow = (text: string, ...otherArgs: any) => {
  // console.log("%c" + text + "%c", "color: gray; font-style: italic;");
  console.log(colors.fg.gray, colors.italic, text, ...otherArgs, colors.reset);
};

export const logEmpty = () => {
  console.log();
};
