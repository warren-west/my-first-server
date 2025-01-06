const userData = require('./users.json')
const http = require('http')

const server = http.createServer((req, res) => {

    console.log("The server is being pinged.")

    // const url = req.url
    // const method = req.method

    // const { url: myUrl, method: myMethod } = req
    const { url, method } = req // doing the same thing, with different syntax

    res.setHeader("Content-Type", "application/json")

    if (url === "/users" && method === "GET") {
        // send back some user data
        // const myUser = [
        //     { fname: "Warren", lName: "West", age: 32, },
        //     { fname: "Clark", lName: "Kent", age: 29, },
        //     { fname: "Peter", lName: "Parker", age: 22, },
        // ]

        // let's use the users.json data instead

        // res.write("You GOT me")
        res.statusCode = 200
        res.end(JSON.stringify(userData)) // potential error! (JavaScript -> JSON)

    } else if (url === "/equipment" && method === "POST") {

        let body = ''

        req.on("data", (chunk) => {
            body += chunk
        })
        req.on("end", () => {
            console.log(body)

            const jsEquipment = JSON.parse(body)

            console.log(jsEquipment.id)
            console.log(jsEquipment.equipmentName)
            console.log(jsEquipment.type)

            res.statusCode = 201
            res.end(JSON.stringify(jsEquipment)) // potential error -> async
        })

    } else {
        res.setHeader("Content-Type", "text/html")
        res.statusCode = 404
        res.end("<h1>You 404 me</h1>")
    }

    console.log(`URL:${url} METHOD:${method}`)
})

server.listen(3000, () => console.log("Server is listening on port 3000."))