const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    technology : {
        type : String,

    },
    experience : {
        type : String
    },
    date : {
        type : Date,
        default  :Date.now
    }
})

module.exports = Profile = mongoose.model("profile" , profileSchema)