const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const user = require('../models/user');


router.post('/register',(req,res)=>{
    bcrypt.hash(req.body.password, 10,(err,hash)=>{
        if(err) {
            return res.json({success: false, message:"Hash Error !"})
        } else{
    const user = new User({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
    })

    user.save()
    .then((_)=>{
        res.json({success:true, message:"Account Has Been Created"})
    })
    .catch((err)=>{
        if(err.code ===11000){
            return res.json({success:false, message:"Email is already exist!"})
        }
        res.json({success:false, message:"Authentication Failed"})
    })
}});
}
)

router.post('/login',(req,res)=>{
    user.find({email:req.body.email}).exec().then((result)=>{
      if(result.length<1){
        return res.json({success:false, message:"User Not Found!!"})
      }
      const user = result[0];
      bcrypt.compare(req.body.password, user.password, (err,ret)=>{
        if(ret){
            return res.json({success:true, token:token, message:"Login Successfully!"})
        }else{
          return res.json({success:false, message:"Password incorrect"})
      }
      })
    }).catch(err =>{
        res.json({success:false,message:"Authentication Failed!"})
    })
})



module.exports = router