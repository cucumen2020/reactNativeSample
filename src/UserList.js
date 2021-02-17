import React from 'react';


function User({user}){
    return(
        <> 
            <b>{user.username} |   <span>{user.email}</span></b>
        </>
    )
}

function UserList(){

    const users = [
        {
            id:1,
            username:'홍길동',
            email:'public.velopert@gamil.com'
        },
        {
            id:2,
            username:'길고양이',
            email:'xnadi@naver.com'
        },
        {
            id:3,
            username:'강요빈',
            email:'liz@example.com'
        }
    ];
    

    return(
        <>

        <div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </div>

        </>
    )
}

export default UserList;