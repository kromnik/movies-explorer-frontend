import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
// import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { SHORT_MOVIE } from "../../utils/constants";
import {
  SERVER_ERROR_MESSAGE,
  QUERY_SERVER_ERROR_MESSAGE,
  QUERY_NOT_FOUND_MESSAGE,
  INVALID_DATA_ERROR_MESSAGE,
  UNAUTHORIZED_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  UPDATE_ERROR_MESSAGE,
  UPDATE_SUCCESS_MESSAGE
} from '../../utils/responseMessages';

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [loggedIn, setLoggedIn] = useState(!!localStorage.jwt);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem("foundMovies")));
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [moviesApiLoading, setMoviesApiLoading] = useState(false);
  const [mainApiLoading, setMainApiLoading] = useState(true);
  const [formSending, setFormSending] = useState(false);
  const [message, setMessage] = useState(null);
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem("checked")));
  const history = useHistory();
  const token = localStorage.getItem("jwt");
  const resetMessage = () => {
    setMessage(null);
  };

  useEffect(() => {
    if (loggedIn) {
      const currentUserLocalStorage = localStorage.getItem("currentUser");
      const savedMoviesLocalStorage = localStorage.getItem("savedMovies");

      if (currentUserLocalStorage && savedMoviesLocalStorage) {
        setCurrentUser(JSON.parse(currentUserLocalStorage));
        setSavedMovies(JSON.parse(savedMoviesLocalStorage));
        setMainApiLoading(false);
      } else {
        mainApi
          .getUserInitialData(token)
          .then((data) => {
            const [currentUser, savedMovies] = data;
            localStorage.setItem(
              "currentUser",
              JSON.stringify(currentUser || [])
            );
            localStorage.setItem(
              "savedMovies",
              JSON.stringify(savedMovies || [])
            );
            setCurrentUser(currentUser || []);
            setSavedMovies(savedMovies || []);
            setMainApiLoading(false);
          })
          .catch((err) => {
            if (err.status === 500) {
              setMessage(QUERY_SERVER_ERROR_MESSAGE);
            }
            console.log(err);
          });
      }
    }
  }, [loggedIn, token]);

  useEffect(() => {
    resetMessage();
  }, []);

  function responseMessage(message) {
    console.log(message);
    setMessage(message);
    setTimeout(() => setMessage(""), 7000);
  }

  function handleSortShortMovies(movies) {
    const sortShortMoviesArray = movies.filter((movie) =>
      movie.duration <= SHORT_MOVIE
    );
    return sortShortMoviesArray;
  }

  async function handleSearchMovies(query) {
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (!movies) {
      setMoviesApiLoading(true);
      await moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem("movies", JSON.stringify(res));
          movies = res;
        })
        .catch((err) => {
          if (err.status === 500) {
            setMessage(QUERY_SERVER_ERROR_MESSAGE);
          }
          console.log(err);
        })
        .finally(() => setMoviesApiLoading(false));
    }
    const searchQuery = query.toLowerCase();

    const foundMoviesResult = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchQuery) ||
        movie.nameEN.toLowerCase().includes(searchQuery);
    });

    if (foundMoviesResult.length === 0) {
      setFoundMovies([]);
      responseMessage(QUERY_NOT_FOUND_MESSAGE);
    } else {
      setFoundMovies(foundMoviesResult);
      localStorage.setItem("foundMovies", JSON.stringify(foundMoviesResult));
      localStorage.setItem("query", searchQuery);
      localStorage.setItem("checked", JSON.stringify(isChecked));
      resetMessage();
    };
  };

  function handleSaveMovie(movie) {
    console.log(token);
    mainApi
      .saveMovie(movie, token)
      .then((res) => {
        localStorage.setItem("savedMovies", JSON.stringify([res, ...savedMovies]));
        setSavedMovies(prev => [res, ...prev]);
        resetMessage();
      })
      .catch((err) => {
        console.log(err);
        setMessage(`Ошибка сохранения, код ${err.status}`);
        if (err) {
          return handleSignOut(); 
        }  
      });
  };

  function handleSearchSavedMovies(query) {
    const searchQuery = query.toLowerCase();
    if (!searchQuery) {
      setFoundSavedMovies([]);
      resetMessage();
      return;
    }

    const foundSavedMoviesResult = savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchQuery) ||
        movie.nameEN.toLowerCase().includes(searchQuery);
    });

    if (foundSavedMoviesResult.length === 0) {
      setFoundSavedMovies([]);
      responseMessage(QUERY_NOT_FOUND_MESSAGE);
    } else {
      setFoundSavedMovies(foundSavedMoviesResult);
      resetMessage();
    };
  };

  function handleDeleteMovie(movie) {
    const remoteMovie = savedMovies.find((i) => i.movieId === movie.id);
    mainApi
      .deleteMovie(remoteMovie._id, token)
      .then(() => {
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(savedMovies.filter((i) => i._id !== remoteMovie._id))
        );
        setSavedMovies(savedMovies.filter((i) => i._id !== remoteMovie._id));
        setFoundSavedMovies(savedMovies.filter((i) => i._id !== remoteMovie._id));
      })
      .catch((err) => {
        console.log(err);
        setMessage(`Ошибка удаления, код ${err.status}`);
        if (err) {
          return handleSignOut(); 
        }  
      });
  };

  function handleLoginSubmit(data) {
    setFormSending(true);
    mainApi
      .login(data)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          return responseMessage(INVALID_DATA_ERROR_MESSAGE);
        } else if (err.status === 401) {
          return responseMessage(UNAUTHORIZED_ERROR_MESSAGE);
        } else if (err.status === 500) {
          return responseMessage(SERVER_ERROR_MESSAGE);
        }
        console.log(err);
        responseMessage(`Что то пошло не так, возможно ошибка соединения с сервером`);
      })
      .finally(() => setFormSending(false));
  };

  function handleRegisterSubmit(data) {
    setFormSending(true);
    mainApi
      .register(data)
      .then(() => {
        handleLoginSubmit(data);
      })
      .catch((err) => {
        if (err.status === 400) {
          return responseMessage(INVALID_DATA_ERROR_MESSAGE);
        } else if (err.status === 409) {
          return responseMessage(CONFLICT_ERROR_MESSAGE);
        } else if (err.status === 500) {
          return responseMessage(SERVER_ERROR_MESSAGE);
        }
        console.log(err);
        responseMessage(`Что то пошло не так, возможно ошибка соединения с сервером`);
      })
      .finally(() => setFormSending(false));
  };

  function handleUpdateProfile(data) {
    setFormSending(true);
    mainApi
      .setUserInfo(data, token)
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        setCurrentUser(res.data);
        responseMessage(UPDATE_SUCCESS_MESSAGE);
      })
      .catch((err) => {
        if (err.status === 400) {
          return responseMessage(UPDATE_ERROR_MESSAGE);
        } else if (err.status === 500) {
          return responseMessage(SERVER_ERROR_MESSAGE);
        }
        console.log(err);
        if (err) {
          return handleSignOut(); 
        }  
      })
      .finally(() => setFormSending(false));
  };

  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser({
      name: "",
      email: "",
    });
    localStorage.removeItem("jwt");
    setFoundMovies([]);
    setSavedMovies([]);
    setFoundSavedMovies([]);
    setIsChecked(false);
    resetMessage();
    localStorage.clear();
    history.push("/");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page-container">
            <Switch>
              <Route exact path="/">
                <Main loggedIn={loggedIn} />
              </Route>
              <ProtectedRoute
                path="/movies"
                component={Movies}
                loggedIn={loggedIn}
                isLoading={moviesApiLoading}
                foundMovies={foundMovies}
                savedMovies={savedMovies}
                onSearchMovies={handleSearchMovies}
                onSaveMovie={handleSaveMovie}
                onSortShortMovie={handleSortShortMovies}
                onDeleteSavedMovie={handleDeleteMovie}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                message={message}
                setMessage={setMessage}
              />
              <ProtectedRoute
                path="/saved-movies"
                component={SavedMovies}
                loggedIn={loggedIn}
                isLoading={mainApiLoading}
                savedMovies={savedMovies}
                foundSavedMovies={foundSavedMovies}
                setFoundSavedMovies={setFoundSavedMovies}
                onSearchSavedMovies={handleSearchSavedMovies}
                onSortShortMovie={handleSortShortMovies}
                onDeleteSavedMovie={handleDeleteMovie}
                message={message}
                setMessage={setMessage}
              />
              <ProtectedRoute
                path="/profile"
                component={Profile}
                loggedIn={loggedIn}
                isLoading={formSending}
                onUpdateProfile={handleUpdateProfile}
                onSignOut={handleSignOut}
                message={message}
                setMessage={setMessage}
              />
              <Route path="/signup">
                {loggedIn ? <Redirect to='/movies' /> :
                  <Register
                    onRegister={handleRegisterSubmit}
                    isLoading={formSending}
                    message={message}
                  />
                }
              </Route>
              <Route path="/signin">
                {loggedIn ? <Redirect to='/movies' /> :
                  <Login
                    onLogin={handleLoginSubmit}
                    isLoading={formSending}
                    message={message}
                  />
                }
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch> 
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
