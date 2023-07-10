const jwt=require('jsonwebtoken')
const express=require('express');
const cors=require('cors')
const authentication=require('../middleware/auth')
const bcrypt= require('bcrypt')
const saltrounds=10
const secretkey="free4allbgmipanelvip"
const app=express();
app.use(cors())

const { connection,paneldatabase } = require('../model/connector')
const bodyParser=require('body-parser');
const { request } = require('http');
const e = require('express');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/protected',authentication)
let port =6000
app.listen(port,()=>console.log('listening on port'+port))
app.post('/connect',(req,res)=>{
    console.log(req.body)
    connection.findOne({key: req.body.user_key}).then((data)=>{
        console.log(data)
      if(data==null){
            res.json({status:false,reason:'user is not registered'})
      }
      else{
        res.json({status:true,data:{token:'free4all',rng:parseInt(data.expiry),modname:data.modname,username:data.username}})
      }
    }

).catch((err)=>console.log(err))
  
})
app.post('/protected/createnewuser',(req,res)=>{
  let data=req.payload
  console.log('hi i entered the new user')
    newuser=new connection({
        username: data.username,
    key: req.body.key,
    modname: req.body.modname,
    expiry: parseInt(req.body.expiry)
    })
    newuser.save().then((dta)=>console.log(dta)).catch((err)=>console.log(err))
    res.json({status:"key created successfully"})
    
})
app.post('/register',(req,res)=>{
  let pwd=req.body.password
  let username=req.body.username
  bcrypt.genSalt(saltrounds).then((salt)=>{bcrypt.hash(pwd,salt).then((hashedpwd)=>{ 
    console.log(hashedpwd)
    let registeruser=new paneldatabase({username:username,
                                          password:hashedpwd})
  registeruser.save().then((dta)=>console.log(dta)).catch((err)=>console.log(err))
  res.json({status:"user created succesfully"})})})
   
})
app.post('/login',(req,res)=>{
  let pwd=req.body.password
  let username=req.body.username
  paneldatabase.findOne({username:username}).then((dta)=>{
    console.log(dta,'IM DTA')
    if(dta!=null){
    bcrypt.compare(pwd,dta.password).then((ismatch)=>{
      if(ismatch){
        const token=jwt.sign({username:username},secretkey,{expiresIn:'1h'})
        res.json({status:true,token:token})
      }
    })}
    else{
      res.json({status:false,token:''})
    }
  }).catch((err)=>{console.log(err)})
})
app.get('/protected/keys',(req,res)=>{
  let data=req.payload
connection.find({username:data.username}).then((dta)=>{
  let rta=dta.map((e)=>{return {key:e.key,expiry:e.expiry}})
  res.json(rta)
})
})