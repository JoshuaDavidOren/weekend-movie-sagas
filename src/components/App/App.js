import {HashRouter as Router, Route, useHistory} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMovieForm from '../MovieForm/MovieForm';

function App() {

  return (
    <section>
    <div className="navbar">
  <a href="#">Home</a>
  <a href="#addmovieform">Add Movie</a>
</div>
    <div className="App">
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <DetailsPage />
        </Route>
        <Route path="/addmovieform" exact>
          <AddMovieForm />
        </Route>
      </Router>
    </div>
    </section>
  );
}


export default App;
