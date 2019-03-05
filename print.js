const escpos = require('escpos');
const device  = new escpos.USB(0x1FC9, 0x2016);
// const device  = new escpos.USB(0x0471, 0x0055);
const options = { encoding: "GB18030" /* default */ };
const printer = new escpos.Printer(device, options);

device.open(() => {
  printer
  .font('a')
  .align('ct')
  .style('bu')
  .size(1, 1)
  .text('The quick brown fox jumps over the lazy dog')
  .text('敏捷的棕色狐狸跳过懒狗')
  .barcode('1234567', 'EAN8')
  .qrimage('https://github.com/song940/node-escpos', (err) => {
    printer.cut();
    printer.close();
  });
});