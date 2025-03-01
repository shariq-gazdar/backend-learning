const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world!");
  })
  .listen(5000, () => console.log("server is running on 5000..."));
