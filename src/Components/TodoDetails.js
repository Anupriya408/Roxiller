import React from 'react';
import { useEffect,useState } from 'react';
 import { useParams} from 'react-router-dom';


function TodoDetails(props) {
    const [state,setState]=useState("")
    let {id}=useParams()
    console.log("getId",id)
 useEffect(()=>{
  getData(id)
 },[id])

const getData=(id)=>{
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res)=>res.json())
  .then((data)=>{
    if(id){
        console.log(id)
        setState(data)
    }else{
        setState("")
    }
  
  })
}
    return (
        <div style={{textAlign:"left"}}>
        <h1 style={{color:"teal"}}>Todo Delails</h1>
           <h2>ToDo  ID <span style={{marginLeft:"40px",textAlign:"left"}}>{state.id}</span></h2>
           <h2>User ID <span style={{marginLeft:"45px",textAlign:"left"}}> {state.id}</span> </h2>
           <h2> Name<span style={{marginLeft:"65px",textAlign:"left"}}>{state.name}</span>   </h2>
           <h2>Email<span style={{marginLeft:"65px",textAlign:"left"}}>{state.email}  </span>  </h2>
             
        </div>
    );
}

export default TodoDetails;