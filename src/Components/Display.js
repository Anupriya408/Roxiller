import React from 'react';
import "./display.css"
import {Link,Outlet} from "react-router-dom"
import { useSelector } from 'react-redux';
import { useState ,useEffect} from 'react';
import {nameAction} from "../Redux/Action"


function Display() {
  const[state,setState]=useState("");
    useEffect(()=>{
        getData()
      },[state])
     
      const getData=()=>{
         fetch(`https://jsonplaceholder.typicode.com/todos?q=${state}`)
          .then((res)=>res.json())
          .then((data)=>{
            console.log(data)
            if(state){
              nameAction(data)
            }else{
              nameAction([])
            }
           
          })
      }
    const data=useSelector((storedata)=>{
        return storedata.TODOS;
      })
      
    return (
     
     
     
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <div style={{width:"50%",alignItems:"center"}}>
        <div style={{marginBottom:"-50px", width:"500px",height:"50px",alignItems:"center", display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
        <h1>Todos</h1>
        <input type="text" style={{padding:"5px",borderRadius:"13px"}}  placeholder='Search.....' onChange={(e)=>{setState(e.target.value)}}/> 
       </div>
       <div style={{width:"100%",alignItems:"center"}}>
         <table>
         <thead>
         <tr>
         <th>ToDo ID</th>
         <th>Title</th>
         <th>Status</th> 
         <th>Show Delails</th>
         </tr>
         </thead>
         <tbody>
          {data.map((e,i)=>{
            console.log(e.id)
            return(
          <tr key={i}>
          <td>{e.userId}</td>
          <td>{e.title}</td>
        <td>{e.completed===true?"Completed":"Incompleted"}</td> 
          <td><Link to={`/${e.userId}`}> View User</Link></td>
          </tr>
            ) 
        })}
         </tbody>
         
         </table>
         </div>
         </div>
         <div>
         <Outlet />
         </div>
       
        </div>
        
    );
}

export default Display;