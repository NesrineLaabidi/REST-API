const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const contactSchema = new Schema({
    name:{type:String , required:true},
    age:{type:Number},
    email:{type:String, rquired:true, unique:true},
    phone:{type:String, rquired:true, unique:true},


})
const contact = model("Contacts",contactSchema);

module.exports = contact;