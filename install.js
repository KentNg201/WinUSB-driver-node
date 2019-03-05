var exec = require('child_process').execFile;
var bat = 'cmd.exe';
var param = ['/c', 'start', '""', './driver/wdi-simple.exe', '--type', '0', '--name', Math.random().toString(36).substring(7), '--vid', process.argv[2], '--pid', process.argv[3]];
var fs = require('fs');

if (process.argv.length >= 4) {
  fs.writeFile("--type", '', (err) => {
    if (err) throw err;
  });

  exec(bat, param, () => {});

  fs.watch("--type", () => {
    var data = fs.readFile("--type", {encoding: 'utf8'}, (err, data) => {
      if (data != '') {
        if (data.includes("success")) {
          console.log(data);
          fs.unlink("--type");
        } 
      }
    });
  });
} else {
  console.log("Missing vid or pid");
}
