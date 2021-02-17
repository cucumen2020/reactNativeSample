import React,{useReducer} from 'react';

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


function CounterUseReducer(){

     const [number, dispatch] = useReducer(reducer,0);


     const _onClick = () => {
        dispatch({type:'INCREMENT'});
     };

     const _onClick2 = () => {
         dispatch({type:'DECREMENT'});
     }
    
    return(
        <>
            <h1>{number}</h1>
            <button onClick={_onClick}>+1</button>
            <button onClick={_onClick2}>-1</button>
        </>
    )
}

export default CounterUseReducer;