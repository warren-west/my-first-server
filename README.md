# My First Node Server
Building a server on Node using the HTTP module.

## Key Elements
The main building blocks of this demo are:
- `require('http')`
- `http.createServer((req, res) => {})` and `.listen(<port-number>)`
- Using `req.url` and `req.method` to create endpoints
- Setting the content type we want to return in our response with `res.setHeader("Content-Type", "application/json")`
- Returning JSON data or plain text data from a `GET` request
- Receiving JSON data from a `POST` request
  - This involves streaming *chunks* of data
  - `req.on("data", (chunk) => {})`
  - `req.on("end", () => {})`
 
## Contributors
@warren-west

## Licence
MIT
