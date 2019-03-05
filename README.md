WinUSB Driver Node Installer
=========================
Note: Only run on Windows Operating System

This tools is use for install custom USB Driver for windows, can use for install printer driver.

## List all the USB devices
Listing all your USB devices plugged in
```shell
node list
```
Your need to get devices VID and PID in order to install driver

## Install WinUSB driver
Install the driver to the USB device, VID and PID must in hex form
```shell
node install <VID> <PID>
```

For example of a printer device
```shell
node install 0x1FC9 0x2016
```

## Test Print
You can test print after devices was install
```shell
node print <VID> <PID>
```

Example
```shell
node print 0x1FC9 0x2016
```