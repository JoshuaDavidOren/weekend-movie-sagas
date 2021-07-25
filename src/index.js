import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_GENRES', getGenres)
    yield takeEvery('POST_MOVIE', postMovieData)
    yield takeEvery('GET_ALL_GENRES', getAllGenres)
    yield takeEvery('DELETE_MOVIE', deleteMovieData)
    yield takeEvery('ONE_MOVIE', oneMovie)
}

function* oneMovie(action) {
    try{
        const one = yield axios.get(`/api/onemovie/${action.payload.id}`);
        console.log('Genres', one.data);
        yield put({type: 'SET_ONE_MOVIE', payload: one.data })
    } catch (error) {
        console.log('Error GETing one movie', error);
    }
}

function* deleteMovieData(action) {
    console.log(action.payload);
    try {yield call(axios.delete, `api/movie/${action.payload}`);
    yield put({type: 'FETCH_MOVIES'})
    }
    catch (error) {
        console.log('Error DELETING from database', error);
    }
}

function* postMovieData(action) {
    try{
        yield call(axios.post, '/api/movie', action.payload);
    } 
    catch(error) {
        console.log('Error POSTing to database', error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* getGenres(action) {

    try{
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        console.log('Genres', genres.data);
        yield put({type: 'SET_GENRES', payload: genres.data })
    } catch (error) {
        console.log('Error GETing genres', error);
    }
}

function* getAllGenres() {

    try{
        const genres = yield axios.get(`/api/genre/all`);
        console.log('Genres', genres.data);
        yield put({type: 'SET_GENRES', payload: genres.data })
    } catch (error) {
        console.log('Error GETing All genres', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
const singleMovieDetails = (state = 0, action) => {
    if(action.type === 'MOVIE_DETAILS'){
        return state = action.payload;
    }
    return state;

}
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movieToEdit = (state = [], action) => {
    switch (action.type) {
        case 'SET_ONE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieToEdit,
        movies,
        genres,
        singleMovieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
