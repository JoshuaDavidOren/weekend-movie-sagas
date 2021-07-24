import {HashRouter as Router, Route, useHistory} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMovieForm from '../MovieForm/MovieForm';

function App() {

const history = useHistory();

const addMovie = () => {
console.log('click');
history.push(`/addmovieform`)
}

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <button type='submit' onClick={(event) => addMovie()}>Add Movie</button>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <DetailsPage />
        </Route>
        <Route path="/addmovieform" exact>
          <AddMovieForm />
        </Route>
      </Router>
    </div>
  );
}


export default App;
