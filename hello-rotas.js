import http from 'http';

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("<h1>Bem vindo</h1>");
  response.end();
});

server.listen(3000, () => {
  console.log("Servidor funcionando =)");
});
