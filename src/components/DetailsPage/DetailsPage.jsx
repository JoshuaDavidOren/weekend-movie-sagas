import { Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import './DetailsPage.css'
import './DetailsPage.css';


function DetailsPage() {
    const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), textAlign: "center",display: "flex", color: theme.palette.text.secondary}}));
    const history = useHistory();
    const movies = useSelector(store => store.movies)
    const dispatch = useDispatch();
    const movie = useSelector(store => store.singleMovieDetails);
    const genres = useSelector(store => store.genres);
    const classes = useStyles();
  
    useEffect(() => {
    console.log('interested?', (history.location.pathname));
    idFromUrl()
}, []);

const idFromUrl = () => {
    console.log(history.location.pathname);
    var thestring = history.location.pathname;
    var thenum = thestring.replace( /^\D+/g, '')
    console.log(Number(thenum));
    dispatch({type: 'MOVIE_DETAILS', payload: Number(thenum)});
    dispatch({type: 'GET_GENRES', payload: Number(thenum)})
}

return(
    <section>
        {movies.filter(eachMovie => eachMovie.id === movie).map(info => ( 
            <>
              <h1 >{info.title}</h1>
              <Paper className={classes.paper}>
                <img src={info.poster}/>
                <p>{info.description}</p>
              </Paper>
            </>
        ))}
      
        <table>
         <tbody>
                <tr>
                    <td>Genre:</td><td>|</td>
                    {genres.map((g, index)  => {
                        return <><td key={index}> {g.name} </td><td>|</td></>     
                        })}
                </tr>
            </tbody>
        </table>
    </section>
)

}



export default DetailsPage; 