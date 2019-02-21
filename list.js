var exec = require('child_process').execFile;
var bat = 'cmd.exe';
var outputFile = './driver/devices.txt';
var param = ['/c', 'start', '\"\"', './driver/wdi-simple.exe', outputFile];
var fs = require('fs');

fs.writeFile(outputFile, '', (err) => {
  if (err) throw err;
});

exec(bat, param, () => {});

fs.watch(outputFile, () => {
  var data = fs.readFileSync(outputFile, {encoding: 'utf8'});
  if (data != '') {
    const devices = JSON.parse(data);
    devices.map((item) => {
      console.log(`"${item.name}":${item.vid}:${item.pid}`);
    });
  }
});