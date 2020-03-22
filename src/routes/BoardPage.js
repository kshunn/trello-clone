import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';
import {PALETTE} from './Home';
import ContentEditable from 'react-contenteditable';
import { BoardListContext } from '../App';

export default function BoardPage({history, match, boardList}){
    const { dispatch } = React.useContext(BoardListContext);
    const board = boardList.find(board => board.boardKey===Number(match.params.boardKey));
    const [nextBoardName, setNextBoardName] = useState(board ? board.boardName : null);
    const nextBoardNameRef = useRef();
    if(!board){
        history.push("/");
        return null;
    }
    const editBoardName = () => {
        const nextBoardName = nextBoardNameRef.current.innerHTML;
        if(!nextBoardName){
            setNextBoardName(board.boardName);
            return;
        }
        else dispatch({
            type: "EDIT_BOARD",
            payload: {
                boardKey: board.boardKey,
                newBoardName: nextBoardName
            }
        });
    };
    const changeText = e => {
        setNextBoardName(e.target.value);
    }
    const disableNewLines = e => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
          e.returnValue = false;
          if (e.preventDefault){
              e.preventDefault();
          }
        }
    }
    return (
        <BoardPageWrapper>
            <Header>
                <BoardTitle>
                    <StyledEditable
                        innerRef={nextBoardNameRef}
                        html={nextBoardName}
                        disabled={false}
                        onChange={changeText}
                        onBlur={editBoardName}
                        onKeyPress={disableNewLines}
                        spellCheck='false'
                    />
                </BoardTitle>
                <ToHome to={{pathname: '/'}}><i className="fas fa-home"></i></ToHome>
            </Header>
            <Board 
                boardKey={board.boardKey}
                listList={board.listList}
            />
        </BoardPageWrapper>
    );
}

const BoardPageWrapper = styled.div`
    display: flex;
    flex-flow: column;
    text-align: center;
    height: 100%;
`;

const BoardTitle = styled.h1`
    font-size: 24px;
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
    font-size: 24px;
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
    padding: 0 20px;
    background-color: ${PALETTE[1]};
`;
