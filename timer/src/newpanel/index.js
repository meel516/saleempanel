const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const user_key = 'ZETlSF3KnP0XeI8C'; // Replace with actual user key value
const UUID = 'd68cd229-4838-3af0-88db-121c020403f2'; // Replace with actual UUID value
const requestData = `game=PUBG&user_key=${user_key}&serial=${UUID}`;
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
let port =4000
app.listen(port,()=>console.log('listening on port'+port))
app.post('/connect',(req,res)=>{
    req.body= requestData
    console.log(req.body.split('&')[1].split('=')[1])
    res.json({status:'ok',data:{token:'hithisismyfirstpanel',rng:9999999999999999}})
})