var http = require("http");
var url = require("url");
var querystring = require("querystring");
//var log = require('./modules/my-log'); //Para importación global
var {info, error} = require('./modules/my-log');
var {countries} = require("countries-list");

var server = http.createServer(function(request, response){
    
    var parsed = url.parse(request.url);
    console.log("parsed:", parsed);

    var pathname = parsed.pathname;

    var query = querystring.parse(parsed.query);
    console.log(query);

    if(pathname === "/"){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<html><body><h1>Hello</h1><button onClick=function(window.location = localhost:4000/country)>Ir a country</button></body></html>");
    }
    else if(pathname === "/exit") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<html><body><h1>Bye</h1></body></html>");
    }
    else if(pathname === "/info") {
        var result = info(pathname);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(result);
        response.end();
    }
    else if(pathname === "/error") {
        var result = error(pathname);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(result);
        response.end();
    }
    else if(pathname === "/country") {
        var result = error(pathname);
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    }
    else {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("<html><body><h1>404 Not Found!</h1></body></html>");
    }

    response.end();

    
    
});

server.listen(4000);
console.log("Running on 4000");



