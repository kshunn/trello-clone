import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './routes/Home';
import BoardPage from './routes/BoardPage';
import CardPage from './routes/CardPage';

export default function Router({boardList}){
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Switch location={background||location}>
        <Route path="/" exact={true} render={props => <Home {...props} boardList={boardList} />} />
        <Route
          path="/:boardKey/:boardName" 
          render={props => <BoardPage {...props} boardList={boardList} />} 
        />
      </Switch>
      {background && 
      <Route 
        path="/:cardKey/:cardName" 
        render={props => <CardPage {...props} boardList={boardList}/>} 
      />}
    </>
  );
}