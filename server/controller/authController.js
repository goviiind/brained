const User = require("../models/User")
const bcrypt  = require("bcrypt")

const authController  = () => {
    
    return {

    //User Login

    async login (req,res){
        console.log("Login API")

        try {
            
            const {email , password} = req.body
    
            const user = await User.findOne({email})
        
            if(!user){
                res.status(400).json({error : 'Invalid Credentials'})
            }
        
            const isMatch = await bcrypt.compare(password , user.password)
            
            if(!isMatch){
                res.status(400).json({error : 'Invalid Credentials'})
            }

            res.json(user)


        } catch (err) {
            console.log(err.message);
            res.send(500).send("Server Error")
        }
    },


    //User Register
    async register(req,res){
        console.log("Register API")
        try {
            
       
 
            const {name , email , password} = req.body

            const isEmail = await User.findOne({email})

            if(isEmail){
                res.json({error :"Email is already taken"})
            }

            const hashPassword =  await bcrypt.hash(password  , 10)

            const user =  new User ({
                name,
                email,
                password : hashPassword
            })

            await user.save()

            res.json(user)

        } catch (err) {
            console.log(err.message);
            res.send("Server Error")
        }
    }
}
}


module.exports = authController