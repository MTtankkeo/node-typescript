import http from "http";
import fs from "fs";
import mime from "mime-types";

const contentTypeOf = (path: string) => {
    return mime.lookup("html") || "application/octet-stream";
}

const server = http.createServer((request, response) => {
    if (request.url === undefined) return;

    // If the file extension does not exist,
    // it will respond with `index.html` due to the characteristics of SPA.
    if (request.method == "GET" && /\.\w+$/.test(request.url)) {

    } else {
        fs.readFile("../client/dist/index.html", "utf8", (err, data) => {
            response.writeHead(200, {"Content-Type": contentTypeOf("html")});
            response.end(data);
        });
    }
});

server.listen(8080, () => {
    console.log("Hello, World!");
});