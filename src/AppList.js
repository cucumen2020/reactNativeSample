import React,{useRef,useState} from 'react';
import UserList from './UserList';
import UserListArray from './UserListArray';
import CreateUser from './CreateUser';


function AppList(){



    // 상태를 변경되는 값들을 정리한 공간
    // 유저 정보를 가지고 있는 배형+ 오브젝트 데이터를 준비한다.
    const [users,setUsers] = useState([
        {
            id:1,
            username:'홍길동',
            email:'public.velopert@gamil.com',
            active:true
        },
        {
            id:2,
            username:'길고양이',
            email:'xnadi@naver.com',
            active:false,
        },
        {
            id:3,
            username:'강요빈',
            email:'liz@example.com',
            active:false,
        }
    ]);
    
    // 입력해야 할 유저 이름과 이메일을 상태 변화를 감지한다.
    const [inputs, setInputs] = useState({
        username:'',
        email:'',
    });



    // 구조 분해 할당을 통해서 오브젵트에 있는 값을 각각 할당한다.
    const {username,email} = inputs;

    const nextId = useRef(4);

    const onCreate = () => {
        // nextId.current 으로  값에 접근 가능하다.

        const user = {
            id:nextId.current,
            username,
            email,
        }
        setUsers(users.concat(user));
        // setUsers([
        //     user,
        //     ...users,
        // ]);
        nextId.current += 1;
    }

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]:value,
        })
    }

    const onRemove = (id) => {
        console.log(`${id}....`);


     setUsers(users.filter(user => user.id !== id));
     nextId.current -=1;

    }

    const onToggle = id => {
    console.log(`값이 넘어 왔습니다 ${id}`);

       setUsers(users.map(
           user => user.id === id ? {...user, active: !user.active } : user
       ))
    }

    



    return(
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
            <UserListArray users={users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    );
}


export default AppList;