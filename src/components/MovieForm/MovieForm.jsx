import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import './MovieForm.css'


function AddMovieForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [url, setURL] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState(1)
    const genres = useSelector(store => store.genres);

    const addMovieData = () => {
        event.preventDefault();
      const  newMovie = {title: title, poster: url, description: description, genre_id: genre}
      console.log('INFO to database',newMovie);
        dispatch({type: 'POST_MOVIE', payload: newMovie})
        setDescription('')
        setTitle('')
        setURL('')
        
    }
    const goHome = () => {
        history.push('/')
    }

return (

<section>
    <center>
        <form action="submit">
    <table>
        <thead>
        <tr><td><h2>Add Movie to Library</h2></td></tr>
    </thead>
    <tbody>
    <tr><td>Name</td></tr>
    <tr><td><input type="text" value={title} placeholder='Movie Title' onChange={(evt) => setTitle(evt.target.value)} required/></td></tr>
    <tr><td>Image</td></tr>
    <tr><td><input type="text" value={url} placeholder='Insert Movie Image URL Here' onChange={(evt) => setURL('images/captain-marvel.jpg')} required/></td></tr>
    <tr><td>Description</td></tr>
    <tr><td><textarea value={description} placeholder='Insert Movie Description Here' rows="4" cols="50" onChange={(evt) => setDescription(evt.target.value)}></textarea></td></tr>
    <tr><td> <div class="dropdown">
  <div class="dropbtn">Genre</div>
  <div class="dropdown-content">
    <a onClick={() => setGenre(1)} >Adventure</a>
    <a onClick={() => setGenre(2)} >Animated</a>
    <a onClick={() => setGenre(3)} >Biographical</a>
    <a onClick={() => setGenre(4)} >Comedy</a>
    <a onClick={() => setGenre(5)} >Disaster</a>
    <a onClick={() => setGenre(6)} >Drama</a>
    <a onClick={() => setGenre(7)} >Epic</a>
    <a onClick={() => setGenre(8)} >Fantacy</a>
    <a onClick={() => setGenre(9)} >Musical</a>
    <a onClick={() => setGenre(10)} >Romantic</a>
    <a onClick={() => setGenre(11)} >Science Fiction</a>
    <a onClick={() => setGenre(12)} >Space-Opera</a>
    <a onClick={() => setGenre(13)} >Superhero</a>
  </div>
</div></td></tr>
    </tbody>
    <tfoot>
        <tr><td><button type='submit' onClick={() => addMovieData()}>Save</button></td></tr>
        <tr><td><button onClick={() => goHome()}>Cancel</button></td></tr>
    </tfoot>
    </table>
    </form>
   
    </center>
</section>

)
}

export default AddMovieForm;