const Obj= require("./test.js");

// const emitter = new EventEmitter();

// Register a listener
const school = new Obj
school.on("bellRing",()=>{
    console.log("This is triggered from school object class")
})
school.emit("bellRing")
// emitter.on("bellRing",()=>{
//     console.log("Event is triggered")
// })

// // Raise an event

// emitter.emit("bellRing")
