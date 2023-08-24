const asyncHandler= require("express-async-handler")
const User = require("../Models/userModel")
const registerUser = asyncHandler(async (req,res) => {
  const { name, email, password, pic } = req.body;

    if(!name||!email||!password){
        res.status(400)
        throw new Error("Please enter all the fields")
    }
    const userExists= await User.findOne({email});
     
    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }
    const user = await User.Create({
        name,email,password,pic
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            password:user.password
        })
    }
    else{
        res.status(400)
        throw new Error("User Not Found")
    }
});

