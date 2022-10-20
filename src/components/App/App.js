import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
      <div className="page">
        <div className="page-container">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/movies">
              <Movies loggedIn={true} />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies loggedIn={true} />
            </Route>
            <Route path="/profile">
              <Profile loggedIn={true} />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="*">
              <PageNotFound loggedIn={true} />
            </Route>
          </Switch>
        </div>
      </div>
  );
}

export default App;
