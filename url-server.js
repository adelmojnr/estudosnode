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
