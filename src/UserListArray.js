import React,{useEffect} from 'react';


function User({user, onRemove,onToggle}){
    const {username, email, id, active} = user;


    /*
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        // props -> state
        // REST API
        // D3 Video.js
        // setInterval, setTimeout
        return ()=>{
            // cleartInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, []);
    */

    useEffect(()=>{
        console.log(`들어온 값은 ${user.id}`);
        return ()=>{
            console.log(`초기 값은 ${user.id}`);
        }
    },[user]);

    return(
        <div> 
         <b style={{
             color:active ? 'green':'balck', cursor: 'pointer'
         }} onClick={()=>onToggle(id)}>{username} </b> &nbsp; | &nbsp;    <span>{email}</span>
         <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    )
}

function UserListArray({users,onRemove,onToggle}){

    

    return(
        <>

        {/* 배열표현1 */}
        {/* <div>
            {users.map(function(value,index){
                return (<User key={index} user={value}/>)
            })}
        </div> */}
        
        
        {/* 배열 표현 2 */}
        {/* {
            users.map(
                (user,index) => <User key={index} user={user} />
            )
        } */}


        {/* 배열 표현 3 */}
        {
            users.map(
                (user) => {
                   return  <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle}/>
                }
            )
        }




        </>
    )
}

export default UserListArray;