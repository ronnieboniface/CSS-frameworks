const baseURL = 'https://ghibliapi.herokuapp.com/films';

const getMovies = () => {
  fetch(`${baseURL}?limit=24`)
  .then(resp => resp.json())
  .then(films => renderFilms(films))
};

const renderFilms = films => {
  return films.forEach(film => {
    const newMovie = new Movie(film);
    newMovie.renderMovieCard();
  });
};

getMovies();