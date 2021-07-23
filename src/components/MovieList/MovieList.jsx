import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), textAlign: "center", flexwrap: "wrap",display: "flex", color: theme.palette.text.secondary}}));

function MovieList() {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    const showMovieDetails = (movie) => {
        console.log('movie detail', movie);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
            <Grid container spacing={3}>
                {movies.map(movie => {
                    return (
                        <Grid item style={{height: "450px" }} id={movie.id}>
                            <Paper className={classes.paper}>
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => showMovieDetails(movie.id)}/>
                        </div>
                        </Paper>
                </Grid>
                    ); 
                })}
                
                </Grid>
            </section>
        </main>

    );
}

export default MovieList;