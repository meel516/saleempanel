
const express=require('express');
const app=express();
const { connection } = require('../model/connector')
const bodyParser=require('body-parser');
const { request } = require('http');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
let port =6000
app.listen(port,()=>console.log('listening on port'+port))
app.post('/connect',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok',data:{token:'hithisismyfirstpanel',rng:9999999999999999}})
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