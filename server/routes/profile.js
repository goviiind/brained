const express = require("express")
const router = express.Router()
const profileController = require("../controller/profileController")


//Fetching profile
router.get("/" , profileController().getProfile)

//Creating profile
router.post("/" , profileController().createProfile)

//Updating Profile
router.put("/" , profileController().updateProfile)

//Deleting Profile
router.delete("/" , profileController().deleteProfile)



module.exports = router