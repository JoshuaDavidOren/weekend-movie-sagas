import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import './MovieForm.css'


function AddMovieForm() {
   const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [url, setURL] = useState('');
    const [description, setDescription] = useState('');

    const addMovieData = () => {
        event.preventDefault();
      const  newMovie = {title: title, poster: url, description: description}
      console.log('INFO to database',newMovie);
        dispatch({type: 'POST_MOVIE', payload: newMovie})
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
    <tr><td><input type="text" placeholder='Movie Title' onChange={(evt) => setTitle(evt.target.value)}/></td></tr>
    <tr><td>Image</td></tr>
    <tr><td><input type="text" placeholder='Insert Movie Image URL Here' onChange={(evt) => setURL(evt.target.value)}/></td></tr>
    <tr><td>Description</td></tr>
    <tr><td><textarea placeholder='Insert Movie Description Here' rows="4" cols="50" onChange={(evt) => setDescription(evt.target.value)}></textarea></td></tr>
    </tbody>
    <tfoot>
        <tr><td><button type='submit' onClick={() => addMovieData()}>Submit</button></td></tr>
    </tfoot>
    </table>
    </form>
    </center>
</section>

)
}

export default AddMovieForm;