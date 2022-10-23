const http = require("http")
const server = http.createServer((req,res)=>{
    if (req.url=="/"){
        res.write("Hello Programmer")
        res.write("How are you focking dong")
        
    }
    if (req.url=="/about"){
        res.write("This is about page")

    }
    res.end()
})
// server.on("connection",()=>{
//     console.log("New Connection")
// })
server.listen(3000)

console.log("Listening to port 3000")
