import React from 'react';


function Hello({color, name}){

    return(
        <div style={{color:color}}>
            안녕!~ 내 이름 모르지? 난 {name} 이라고 해
        </div>
    )
}

Hello.defaultProps = {
    name:'이름없음',
    color:'#00FF00'
};

export default Hello;