import React from 'react';

let initialdata={
    TODOS:[],
};
 
function Reducer(state=initialdata,action) {
    switch(action.type){

        case "NAME":{
           return    {
                ...state, TODOS:action.username
            }
          
        }
            default:{
            return state;
        }



    }

}

export default Reducer;