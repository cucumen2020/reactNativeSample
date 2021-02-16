import React,{useState} from 'react';


// 한가지 input 관리 방법

function InputSample(){
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = function(){
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화 한다.</button>
            <div>
                값: {text}<br/>
                
            </div>
        </div>
    )
}

export default InputSample;