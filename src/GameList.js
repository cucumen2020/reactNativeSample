import React from 'react';



function Game({id, title, company,onRemove,onToggle}){


    return(
        <>
           <div><b onClick={()=>onToggle(id)}>{title}</b> | {company} <button onClick={()=>onRemove(id)}>삭제</button></div>
        </>
    )
}

function GameList({games,onRemove, onToggle}){

    return(
        <>
            {
                games.map(game=>{
                    return <Game  key={game.id} id={game.id} title={game.title} company={game.company} onRemove={onRemove} onToggle={onToggle}/>
                })
            }
        </>
    )
}


GameList.defaultProps = {
    id:0,
    titl:'타이틀',
    company:'회사',
}


export default GameList;