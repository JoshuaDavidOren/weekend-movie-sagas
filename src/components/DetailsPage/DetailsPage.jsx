import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './DetailsPage.css'


const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), textAlign: "left", flexwrap: "wrap",display: "flex", color: theme.palette.text.secondary}}));

function DetailsPage() {

const history = useHistory();
const movies = useSelector(store => store.movies)
const dispatch = useDispatch();
const movie = useSelector(store => store.singleMovieDetails);
const genres = useSelector(store => store.genres);
const classes = useStyles();
const [clickedMovie, setClickedMovie] = useState(0)

useEffect(() => {
    console.log('interested?', (history.location.pathname));
    dispatch({type: 'FETCH_MOVIES'})
    // idFromUrl()
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


return(
    <section>
        <h1>{movies[movie-1].title}</h1>
        <Card>
    <Paper className={classes.paper}>
    <CardMedia
          className={movies[movie-1].title}
          component="img"
          alt={movies[movie-1].title}
          src={movies[movie-1].poster}
          title={movies[movie-1].title}
        />
    <p>{movies[movie-1].description}</p>
    </Paper>
    </Card>
    <table>
        <tbody>
    <tr>
    <td>Genre:</td>
    {genres.map((g, index)  => {
        return <td key={index}> {g.name} </td>
          
    })}
    </tr>
    </tbody>
    </table>
    </section>
)


}


export default DetailsPage; 