
const express=require('express');
const cors=require('cors')
const app=express();
app.use(cors())
const { connection } = require('../model/connector')
const bodyParser=require('body-parser');
const { request } = require('http');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
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
        res.json({status:true,data:{token:'free4all',rng:data.expiry,modname:data.modname,username:data.username}})
      }
    }

).catch((err)=>console.log(err))
  
})
app.post('/createnewuser',(req,res)=>{
    newuser=new connection({
        username: req.body.username,
    key: req.body.key,
    modname: req.body.modname,
    expiry: req.body.expiry,
    })
    newuser.save().then((dta)=>console.log(dta)).catch((err)=>console.log(err))
    res.json({status:"key created successfully"})
    
})