var exec = require('child_process').execFile;
var bat = 'cmd.exe';
var outputFile = '--type';
var param = ['/c', 'start', '""', './driver/wdi-simple.exe', outputFile, '0', '--name', Math.random().toString(36).substring(7), '--vid', process.argv[2], '--pid', process.argv[3]];
var fs = require('fs');

if (process.argv.length >= 4) {
  fs.writeFile(outputFile, '', (err) => {
    if (err) throw err;
  });

  exec(bat, param, () => {});

  fs.watch(outputFile, () => {
    const data = fs.readFileSync(outputFile, { encoding: 'utf8' });
    if (data !== '' && data.includes('success')) {
      console.log('Install Success');
    } else if (data.includes(',')) {
      console.log('Install Failed');
    }
  });
} else {
  console.log("Missing vid or pid");
}
