# Estudos Node.JS

## Subindo um servidor `http`:
```javascript
import http from 'http';

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("<h1>Bem vindo</h1>");
  response.end();
});

server.listen(3000, () => {
  console.log("Servidor funcionando =)");
});

```

## Criando rotas com `if` e `else`:
```javascript
import http from 'http';

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("<h1>Hello world</h1>");
  if (request.url == "/"){
    response.write("<h1>Página principal</h1>");
  }else if (request.url == "/bemvindo"){
    response.write("<h1>Bem vindo: </h1>");
  }else {
    response.write("<h1>Página não encontrada =( </h1>");
  }
  response.end();
});
server.listen(3000, () => {
  console.log("Servidor funcionando =)");
});

```

## Capturando valor de um `query string`:
```javascript
import http from 'http';
import url from 'url';

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("<h1>Dados da query string</h1>");
  const result = url.parse(request.url);
  for (const key in result.query) {
    response.writeHead(`<h2>${key} : ${result.query[key]}</h2>`);
  }
  response.end();
});

server.listen(3000,() => {
  console.log("Servidor http =)");
});
```
