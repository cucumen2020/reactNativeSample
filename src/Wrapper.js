import React from 'react';

function Wrapper({children,title}){


    const Style = {
        border: '2px solid black',
        padding: 16
    }

    return<div style={Style}>{children}</div>
}

export default Wrapper;