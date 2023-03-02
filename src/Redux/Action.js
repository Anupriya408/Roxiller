import reduxstore from "./Store"

export const nameAction=(name)=>{
  reduxstore.dispatch({
    type:"NAME",
    username:name,
  })


} 