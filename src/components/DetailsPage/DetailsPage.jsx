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
const classes = useStyles();

useEffect(() => {
    getDetails()
    dispatch({ type: 'FETCH_MOVIES' });
    console.log('interested?', Number(history.location.pathname));
}, []);

const getDetails = () => {
    
}
return(
    <section>
        <h1>{movies[movie-1].title}</h1>
    <Paper className={classes.paper}>
    <img src={movies[movie-1].poster}/>
    <p>{movies[movie-1].description}</p>
    </Paper>
    </section>
)


}


export default DetailsPage; 