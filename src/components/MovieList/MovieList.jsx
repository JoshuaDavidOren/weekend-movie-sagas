import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), textAlign: "center",display: "flex", color: theme.palette.text.secondary}}));

function MovieList() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    
    const deleteThisAlert = (id) => {
        Swal.fire({
        title: 'Are you sure you want to delete this?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Don't Delete`,
        denyButtonText: `Delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Cancled Delete', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Deleted', '', 'info')
          deleteMovie(id);
        }})
      }

      const deleteMovie = (id) => {
        dispatch({type: 'DELETE_MOVIE', payload: id})
    }


    const showMovieDetails = (id) => {
        console.log('movie detail', id);
        dispatch({type: 'MOVIE_DETAILS', payload: id})
        dispatch({type: 'GET_GENRES', payload: id})
        history.push(`/details`)

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
            <Grid container spacing={3}>
                {movies.map((movie, index) => {
                    return (
                        <Grid item style={{height: "450px" }} key={index}>
                            <Paper  className={classes.paper}>
                        <div key={movie.id} >
                            
                            <img src={movie.poster} alt={movie.title} onClick={() => showMovieDetails(movie.id)}/>
                        </div>
                        <table>
                            <tbody>
                                <tr><td>
                                    <Button
                                              style={{ width: "88px", height: "40px" }}
                                              variant="contained"
                                              color="primary"
                                              onClick={() => showMovieDetails(movie.id)}
                                            >
                                              View Details
                                            </Button>
                                            </td></tr>
                                            <tr><td>
                                    <Button
                                              style={{ width: "88px", height: "40px" }}
                                              color="primary"
                                              onClick={() => showMovieDetails(movie.id)}
                                            >
                                              Edit Details
                                            </Button>
                                            </td></tr>
                                            <tr><td>
                                    <Button
                                              style={{ width: "88px", height: "40px" }}
                                              color="alert"
                                              onClick={() => deleteThisAlert(movie.id)}
                                            >
                                              Delete
                                            </Button>
                                            </td></tr>
                            </tbody>
                        </table>
            
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