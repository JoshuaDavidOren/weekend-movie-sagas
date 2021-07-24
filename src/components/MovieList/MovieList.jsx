import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), textAlign: "center", flexwrap: "wrap",display: "flex", color: theme.palette.text.secondary}}));

function MovieList() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    const showMovieDetails = (movie) => {
        console.log('movie detail', movie);
        dispatch({type: 'MOVIE_DETAILS', payload: movie})
        dispatch({type: 'GET_GENRES', payload: movie})
        history.push(`/details`)

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
            <Grid container spacing={3}>
                {movies.map((movie, index) => {
                    return (
                        <Grid movies style={{height: "450px" }} key={index}>
                            {/* <Paper  className={classes.paper}>
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => showMovieDetails(movie.id)}/>
                        </div>
                        </Paper> */}
                        <Card>
          <Paper className={classes.paper}>
          <CardMedia
          className={movie.title}
          style={{height: '450', width: '350'}}
          component="img"
          alt={movie.title}
          src={movie.poster}
          title={movie.title}
        />
        </Paper>
          </Card>
                </Grid>
                    ); 
                })}
                
                </Grid>
            </section>
        </main>

    );
}

export default MovieList;