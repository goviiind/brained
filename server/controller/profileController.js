const User = require("../models/User")

 const profileController = () =>{
     return {

        //Fetch Profile
         async getProfile(req,res){

            console.log("Fetching Profile")
             try{

                
               const {userId} = req.body  

                const user = await User.find({_id : userId})

                res.json(user)

             }catch(err){
                console.log(err.message)
                res.send("Server Error")
             }
         },


         //Create Profile

         async createProfile (req,res){

            console.log("Create Profile")

             try{
                
                const { userId , technology , experience } = req.body

            

                const user = await User.findById({_id :userId})

                const newSkill = {
                    technology,
                    experience,
                }

              user.skills.unshift(newSkill)

              await user.save()

                res.json(user.skills)

             }catch(err){
                console.log(err.message)
                res.send("Server Error")
             }
         } ,


         //Update Profile
         async updateProfile(req,res){
             console.log("Update Profile")
            try{

                const {userId,skillId ,  technology,
                    experience,} = req.body

                const user = await User.findById({_id : userId})

                const updatedSkill  = {
                    technology,
                    experience
                }

                const editIndex = user.skills.map(skill =>skill._id.toString()).indexOf(skillId)

                user.skills[editIndex] = updatedSkill

                await user.save()

                res.json(user.skills)


            }catch(err){
                console.log(err.message)
                res.send("Server Error")
            }
         } , 


         //Delete Profile

         async deleteProfile(req,res){

            console.log("Delete Profile")
            try{

                const {userId,skillId} = req.body

                const user = await User.findById({_id : userId})

                const removeIndex = user.skills.map(skill =>skill._id.toString()).indexOf(skillId)

                user.skills.splice(removeIndex , 1)

                await user.save()

                res.json(user.skills)


            }catch(err){
                console.log(err.message)
                res.send("Server Error")
            }
         }
     }
 }

 module.exports = profileController