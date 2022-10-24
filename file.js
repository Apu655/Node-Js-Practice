const fs = require("fs")
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`,"utf-8vb ")
ourReadStream.on("data",(chunk)=>{
    console.log(chunk)
})