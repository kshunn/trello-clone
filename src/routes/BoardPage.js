import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';
import {PALETTE, EMPTY} from './Home';
import ContentEditable from 'react-contenteditable';

export default function BoardPage({location, history, boardList, functionSet}){
    const board = location.state ? boardList.find(board => board.boardKey===location.state.key) : null;
    const [nextBoardName, setNextBoardName] = useState(board ? board.boardName : null);
    const nextBoardRef = useRef();
    if(location.state===undefined){
        history.push("/");
        return null;
    }
    const editBoardName = () => {
        const nextBoardName = nextBoardRef.current.innerHTML;
        if(!nextBoardName){
            setNextBoardName(board.boardName);
            return;
        }
        else functionSet.edit(location.state.key, EMPTY, EMPTY, nextBoardName);
    };
    const changeText = e => {
        setNextBoardName(e.target.value);
    }
    return (
        <BoardPageWrapper>
            <Header>
                {/* <BoardTitle>{location.state.name}</BoardTitle> */}
                <BoardTitle>
                    <StyledEditable
                        innerRef={nextBoardRef}
                        html={nextBoardName}
                        disabled={false}
                        onChange={changeText}
                        onBlur={editBoardName}
                        spellCheck='false'
                    />
                </BoardTitle>
                <ToHome to={{pathname: '/'}}><i className="fas fa-home"></i></ToHome>
            </Header>
            <Board 
                boardKey={location.state.key} 
                boardName={location.state.name} 
                listList={board.listList} 
                functionSet={functionSet}
            />
        </BoardPageWrapper>
    );
}

const BoardPageWrapper = styled.div`
    display: flex;
    flex-flow: column;
    text-align: center;
    min-height: 100vh;
`;

const BoardTitle = styled.h1`
    font-size: 30px;
    margin: auto;
    padding: 10px 20px;
    color: ${PALETTE[3]};
    cursor: pointer;
`;

const StyledEditable = styled(ContentEditable)`
    padding: 10px;
    outline-color: ${PALETTE[3]};    
`;

const ToHome = styled(Link)`
    font-size: 30px;
    color: ${PALETTE[3]};
    &:hover{
        color: ${PALETTE[2]};
    }
`;

const Header = styled.header`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: ${PALETTE[1]};
`;
