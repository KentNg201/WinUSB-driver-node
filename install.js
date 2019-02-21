var exec = require('child_process').execFile;
var bat = 'cmd.exe';
var param = ["/c", "start", "\"\"", "./driver/wdi-simple.exe", "--type", "0", "--name",  Math.random().toString(36).substring(7), "--vid", process.argv[2], "--pid", process.argv[3]];

if (process.argv.length >= 4) {
  exec(bat, param, () => {});
} else {
  console.log("Missing vid or pid");
}
