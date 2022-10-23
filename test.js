const EventEmitter = require("events")
class School extends EventEmitter{
    ring = ()=>{

        this.emit("bellRing")
    
    }

}


// Raise an event
module.exports = School