const mongoose = require('mongoose')

const userSchema = new mongoose.schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String, enum:["User", "Admin", "SuperAdmin"], default:User},
    profile:{type:String},
    isActive:{type:Boolean}
})

const user = mongoose.model("user", userSchema)

module.exports = user
