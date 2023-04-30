const os=require("os");
console.log("Total memory:",os.totalmem());
console.log("totle memore in gb:",os.totalmem()/1024 /1024 / 1024);
console.log("free memore in gb:",os.freemem()/1024 /1024 / 1024);
console.log("os version:", os.version());
console.log("CPU:", os.cpus());