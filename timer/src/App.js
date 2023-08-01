import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';


function App() {
  let [state,setState]=useState(0)
  let [show,setShow]=useState(false)
  let [draw,setDraw]=useState(99999)
  let [pro,setPro]=useState({})
  let stateconfusion={name:'saleem',age:25}
  let [obj,setObj]=useState({name:'saleem',age:25})
  let [func,setFunc]=useState({name:'saleem',champu:()=>{
    console.log(obj)
  }})
  let bambu=useRef(false)
  let drawer=useRef({value:999})
  let count=useRef(0)
  function champu(){
    console.log('bakra',obj)
  }
  useEffect(()=>{ let promise=new Promise((res,rej)=>{
    // console.log('inside promise abbas value is ',abbas)
     if(false){
       res('succes')
     }
   })
   setPro(promise)
   console.log('use effect is running')
   function time(x,y){
    if(x<=0){
      return
    }
    console.log(x)

    x=x-1
  
    // if(typeof(promise)=="undefined"){console.log('welocome')}
    // else
    // {promise.then((dta)=>console.log(dta))}
    // console.log(promise)
    // console.log(state,'hi saleem')
    // console.log(show)
    //console.log(abbas,'hi')
    // console.log('hicheck',y==obj)
  
    if(show){
      console.log('story is success')
    }
    setTimeout(()=>time(x,y),1000)
  }
   },[])

  
 
  return (
    <div className="App">
 

  
<input type="text" class="input" placeholder="enter your number" onInput={(e)=>{
  console.log(bambu)
 console.log(func)
 func.champu()

// let start=e.target.value
count.current=parseInt(e.target.value)
// setState(start)
// start=parseInt(start)
// setTimeout(champu,5000)
// console.log(start)
console.log(show)
function time(x){
  if(count.current<=0){
    return
  }
  count.current=count.current-1
  if(true){
    // setDrawer((prev)=>({...prev,value:99999}))
    drawer.current={value:count.current}
    console.log(drawer)
    console.log(drawer.current,'inside my drawer')
  }
  // console.log(start)
  console.log(count.current,'inside my input box')
  // start=start-1

  setTimeout(()=>time(x),1000)
}
// if(typeof(time)=="undefined"){
//   jugad=true
// }
// else{
//   jugad=false
// }
time(count.current,obj)
// let i=0
// while(true){
//   i++
//   console.log('while')
//   if(start==0){
//     break;
//   }
//   console.log(start)
//    start=start-1

// console.log('insidepromise',state)
// setTimeout(()=>{
//   let call=new Promise((res,rej)=>{
//     console.log(draw)
//     if(abbas==50){
//       res('sucess')
//     }
//     })
//   call.then((dta)=>console.log(dta))
// console.log(call)},i*1000)
// } 
// let pk=new Promise((res,rej)=>{setTimeout(()=>res('success'),10000)})
// async function saleel(){
//   const rk=await pk
//   function stress(){
//     console.log('new update is',abbas)
//   }
//   return stress
// }
// let st=saleel()
// st.then((dta)=>dta())



// latest update
// console.log(pro)
// pro.then(()=>console.log('1245'))
}}></input>

{/* <input type="text" onInput={(e)=>setDraw(e.target.value)}></input> */}
<button onClick={(e)=>{
  bambu.current=true
  console.log(drawer.current,'inside enter')
  setDraw(drawer.current.value)
  setShow(true)
console.log('clicked',show)
}
}  class="button-34" role="button">Draw</button>
{/* <button onClick={()=>{
  setObj((prev)=>({...prev,age:prev.age+1}))

}}>change stateconfusion</button>
<button onClick={()=>console.log(obj,drawer.current)}>click me to know stateconfusion status</button>
<div>timeleft:{draw}</div> */}
<div></div>
<div></div>
<div></div>
<div class="timer-group">
  <div class="timer hour">
    <div class="hand"><span></span></div>
    <div class="hand"><span></span></div>
  </div>
  <div class="timer minute">
    <div class="hand"><span></span></div>
    <div class="hand"><span></span></div>
  </div>
  <div class="timer second">
    <div class="hand"><span></span></div>
    <div class="hand"><span></span></div>
  </div>
  <div class="face">
    <h2>Time left</h2>
    <p id="lazy">{drawer.current.value}</p>  
  </div>
</div>
    </div>
  );
}

export default App;
