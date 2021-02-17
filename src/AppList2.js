import React,{useState, useRef} from 'react';
import CreateGame from './CreateGame';
import GameList from './GameList';

function AppList2(){

    const [games, setGames] = useState([
        {
            id:1,
            title:'라스트 오브 어스1',
            company:'너티독',
        },
        {
            id:2,
            title:'마리오 3d 월드',
            company:'닌텐도',
        },
        {
            id:3,
            title:'젤다의 전설',
            company:'닌텐도',
        }

    ]);

    // 게시물 추가시 id 생성값
    const ExtInput = useRef(4);

    // 게시물 수정시 id 임시 저장 공간 
    const EditId = useRef(null);

    const [inputs,setInputs] = useState({
        title:'',
        company:'',
    })
    const {title, company} = inputs;

    const onChange = (e) => {

        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]:value
        });


    }

    const onCreate = () => {

        const game = {
            id:ExtInput.current ,
            title,
            company};

        setGames([
            ...games,
            game
        ]);

        ExtInput.current +=1;
    }

    const onRemove = (id) => {
        setGames(games.filter(game=> game.id !== id));
    }

    const onToggle = (id) => {

        // 수정한 게시물 id를 저장한다.
        EditId.current = id;

        games.map(
            game => {
                return game.id === id ? setInputs({...inputs, title:[game.title], company:[game.company]}) : game
            }
        );
    }

    const onBlur = (e) => {
        console.log(EditId.current);

        // 수정할 게시물의 id를 가져온다.
        const id = EditId.current;

        const {name,value} = e.target;

        setGames(
            games.map(
                game => {
                    return game.id === id ? {...game,[name]:value} : game
                }
            )
        );
        
    }

    return(
        <>
            <CreateGame title={title} company={company} onChange={onChange} onCreate={onCreate} onBlur={onBlur}/>
            <GameList games={games} onRemove={onRemove} onToggle={onToggle}/>
        </>
    )
}

export default AppList2;