import React from 'react';


function CreateUser({username, email, onChange, onCreate}){

    return(
        <>
            <input name="username" onChange={onChange} placeholder="이름을 입력하세요" value={username}/>
            <input name="email" onChange={onChange} placeholder="이메일을 입력하세요" value={email}/>
            <button onClick={onCreate}>등록</button>
        </>
    )
}


export default CreateUser;