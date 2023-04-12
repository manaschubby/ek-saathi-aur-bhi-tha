const mongoose = require('mongoose');

// Define a schema for the Officer model
const officerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rank:{
        type: String,
    },
    unit: {
        type: String,
    },
    yearOfDeath: {
        type: String,
    },
    svc_no: {
        type: String,
    },
    svc: {
        type: String,
    },
    operation: {
        type: String,
    },
    reasonOfDeath: {
        type: String,
    },
    awards:{

    },
    image:{
        type: String,
    },
    arm:{
        type:String
    }
  }); 
  
let Officer;

try {
    Officer = mongoose.model('Officer');

} catch (error) {
    Officer = mongoose.model('Officer', officerSchema);
}
module.exports =  { Officer };