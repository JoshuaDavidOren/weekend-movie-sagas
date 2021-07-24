import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';


import './DetailsPage.css';

const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), textAlign: "center", flexwrap: "wrap",display: "flex", color: theme.palette.text.secondary}}));

function DetailsPage() {

    const history = useHistory();
const movies = useSelector(store => store.movies)
const dispatch = useDispatch();
const movie = useSelector(store => store.singleMovieDetails);
const genres = useSelector(store => store.genres);
const classes = useStyles();
const [clickedMovie, setClickedMovie] = useState(0)

useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    dispatch({type: 'GET_GENRES'})
    console.log('interested?', (history.location.pathname));
    // idFromUrl()
    getDetails()
}, []);


//really trying to get refresh to work
// const idFromUrl = () => {
//     console.log(history.location.pathname);
//     var thestring = history.location.pathname;
//     var thenum = thestring.replace( /^\D+/g, '')
//     console.log(Number(thenum));
//     dispatch({type: 'MOVIE_DETAILS', payload: Number(thenum)});
//     setClickedMovie(Number(thenum))
//     getDetails()
// }

const getDetails = () => {
    
}
return(
    <section>
        <h1>{movies[movie-1].title}</h1>
    <Paper className={classes.paper}>
    <img src={movies[movie-1].poster}/>
    <p>{movies[movie-1].description}</p>
    <p>{movies[movie-1].genra}</p>
    {genres.map((g)  => {
        return <span id={g.name}>{g}</span>
    })}
    </Paper>
    </section>
)


}


export default DetailsPage; 