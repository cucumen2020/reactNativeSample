import React,{useState} from 'react';


function Counter(){

     const [value, setValue] = useState(0);

     const _onClick = function(){
        console.log('_onClick');
        setValue(prevName => prevName + 10);
    }
    
    
    const _onClick2 = () => {
        console.log('_onClick2');
        setValue(prevSun => prevSun - 2);
    }
    
    return(
        <>
            <h1>{value}</h1>
            <button onClick={_onClick}>+1</button>
            <button onClick={_onClick2}>-1</button>
        </>
    )
}

export default Counter;