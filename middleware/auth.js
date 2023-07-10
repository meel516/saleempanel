const express=require('express');
const app=express();
const cors=require('cors')

const jwt=require('jsonwebtoken')
const secretkey="free4allbgmipanelvip"
const bodyParser=require('body-parser');
const { access } = require('fs');
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
function authentication(req,res,next){

    if(req.headers){
      console.log(req.headers)
    let broken=req.headers['access-token']
    console.log(broken)

        jwt.verify(broken,secretkey,(err,data)=>{
            if(err){
                console.log(err)
                res.json({status:"not authorised"})
            }
            else{
                console.log(data)
                req.payload=data
                next()
            }
        })
    }

}
module.exports=authentication