import * as http from '../../lib/helpers/httpClient.js';

const movieList = document.querySelector('#top-movies');
const searchForm = document.querySelector('#searchForm');

const initApp = () => {
  loadMovies();
};

const loadMovies = async () => {
  const data = await http.get('discover/movie');

  clear();

  data.results.forEach((movie) => {
    movieList.appendChild(createHtml(movie));
  });
};

const createHtml = (movie) => {
  const display = document.createElement('div');

  let html = `<section class="card">
      <a href="./movie-details.html?id=${movie.id}">
        ${
          movie.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>`
            : `<img src="../../assets/images/No-Image.jpg" alt="${movie.title}"/>`
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Premiär datum: ${movie.release_date}</small>
        </p>
      </div>
    </section>`;

  display.innerHTML = html;
  return display;
};

const clear = () => {
  movieList.innerHTML = '';
};

// Event handling...
const handleSearch = async (e) => {
  e.preventDefault();

  const searchValue = document.querySelector('#searchInput').value;

  if (searchValue.trim() === '') {
    loadMovies();
    return;
  }

  const data = await http.search('movie', searchValue);

  clear();
  data.results.forEach((movie) => {
    movieList.appendChild(createHtml(movie));
  });
};

document.addEventListener('DOMContentLoaded', initApp);
searchForm.addEventListener('submit', handleSearch);
