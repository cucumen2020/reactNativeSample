import React,{useState,useRef} from 'react';


// 여러개의 input를 관리하는 방법
// useRef으로 DOM에 접근하여 태그에 선택하는 방법

function MultiInputSample(){


    // DOM에 접근하기 위해서 HooK인 useRef()으로 접근할 수 있다.
    const nameInput = useRef();
   

    // 객체를 상태 최기 값으로 할당한다.
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    // 상태 값을 각각 name, nickname 변수에 구조 분해 할당으로 각각 값을 넣는다. 
    const {name,nickname} = inputs;

    const onChange = (e) => {

        // input 속성의 name, value 속성을 구조 분해 할당으로 각각 값을 넣는다.
        const { name, value } = e.target;

        // 기존 상태를 유지한 상태로, 변경되 값을 위로 올린다.
        setInputs({
            ...inputs,
            [name]:value,
        });

    };


    const onReset = () => {

        // 상태 값을 최기화 한다.
        setInputs({
          name:'',
          nickname:'',   
        });

        // useRef으로 접근하여 Input 태그 선택한 상태로 만든다.
        nameInput.current.focus();
    }


    return(
        <>
          <input 
          name="name" 
          placeholder="이름"  
          onChange={onChange} 
          value={name}
          ref={nameInput}
          />
          
          <input 
          name="nickname" 
          placeholder="닉네임" 
          onChange={onChange} 
          value={nickname}
          />

          <button onClick={onReset}>초기화</button>
          <div>
              <b>값:</b>
              {name} : {nickname}
          </div>
        </>
    )
}

export default MultiInputSample;