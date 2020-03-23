import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './routes/Home';
import BoardPage from './routes/BoardPage';
import CardPage from './routes/CardPage';

export default function Router(){
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Switch location={background||location}>
        <Route path="/" exact={true} children={<Home />} />
        <Route
          path="/:boardKey/:boardName"
          children={<BoardPage />} 
        />
      </Switch>
      {background && 
      <Route 
        path="/:cardKey/:cardName" 
        children={<CardPage />}
      />}
    </>
  );
}