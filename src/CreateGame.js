import React from 'react';

function CreateGame({title,company,onChange,onCreate,onBlur}){

    return(
        <>
            <div><input name="title" onChange={onChange} value={title} onBlur={onBlur} /><input name="company" onChange={onChange} value={company}  onBlur={onBlur}/><button onClick={onCreate}>등록</button></div>
        </>
    );
}

export default CreateGame;