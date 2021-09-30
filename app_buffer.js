//buffer is a queue which holds limited data at any time
var buf = Buffer.alloc(5);
buf.write("Hello")
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write("wo");
console.log(buf.toString());