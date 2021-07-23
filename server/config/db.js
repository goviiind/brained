const mongoose= require("mongoose")
const mongoUrl = process.env.MONGOURL

const connectDB  = async () =>{
    try{

        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
        })

        console.log("Connected to DB...")

    }catch(err){
        console.log(err)
        process.exit()
    }
}

module.exports = connectDB
