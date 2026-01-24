const express= require('express');
const router= express.Router();
const User= require('../modals/userModal');


// Route to get all users
router.get('/users', async (req, res)=>{
  try{
    const allUsers = await User.find({});
    if(allUsers.length === 0){
      return res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json(allUsers);
  }
  catch(error){
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});
router.post("/login", async(req,res)=>{
    const {email,password}= req.body;
    try{
      const user =await User.find({email: email});
      if(!user){
        return res.status(404).json({message: 'User not found'});
      }
      else{

      }
    }
    catch(error){
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  });

module.exports= router;
