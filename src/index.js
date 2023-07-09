
const express=require('express');
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
let port =6000
app.listen(port,()=>console.log('listening on port'+port))
app.post('/connect',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok',data:{token:'hithisismyfirstpanel',rng:9999999999999999}})
})