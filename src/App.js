import './App.css';
import MoviesList from './component/movieList/MovieList';
import Menu from './component/NavBar/Menu';
import React from 'react';
import { Button } from 'react-bootstrap';
import Modale from './component/AddMovie/AddMovie';
import { movies } from './data/Movies';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [moviesList, setMovieList] = React.useState(movies);
  const [searchWord, setSearchWord] = React.useState('');
  const addMovie = (newMovie) => setMovieList([...moviesList, newMovie]);
  const handleSearch = (e) => setSearchWord(e.target.value);
  const [rateSearch, setRateSearch] = React.useState(0);

  return (
    <div className="App">
      <Menu handleSearch={handleSearch}
        setRateSearch={setRateSearch}
        rateSearch={rateSearch} />
      <br />
      <br />
      <Button variant="primary" onClick={() => setModalShow(true)}>add a movie</Button>
      <br />
      <br />
      <Modale
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleAdd={addMovie}
      />
      <MoviesList movies={
        searchWord
          ? moviesList.filter((movie) =>
            movie.title.toLowerCase().includes(searchWord.toLowerCase())
          )
          : rateSearch > 1
            ? moviesList.filter((movie) => movie.rate >= rateSearch)
            : moviesList
      } />
    </div>
  );
}

export default App;
