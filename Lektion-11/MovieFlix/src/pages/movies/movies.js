import * as http from '../../lib/helpers/httpClient.js';

const searchForm = document.querySelector("#searchForm");
const movieList = document.querySelector('#top-movies');

const initApp = async () => {
  loadMovies();
};

const loadMovies = async () => {
  const data = await http.get('discover/movie');
  data.results.forEach(movie => {
    movieList.appendChild(createHtml(movie));
  });
  // createHtml(data.results);
};

const createHtml = (movie) => {
  const display = document.createElement('div');
  // movies.forEach(movie => {

  let html =
    `<section class="card">
        <a href="./movie-details.html?id=${movie.id}">
          ${movie.poster_path ? 
          `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />`: 
          `<img src="../../assets/images/No-Image.jpg" alt="${movie.title}" />` 
    }
        </a>
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            <small class="text-muted">Premiär datum: ${movie.release_date}</small>
          </p>
        </div>
      </section>` ;

  display.innerHTML = html;
  return display;
  // document.querySelector('#top-movies').innerHTML += html;
  // });
}

const clear = () => {
  movieList.innerHTML = "";
}

const handleSearch = async (e) => {
  e.preventDefault();

  // get values from searchbar
  const searchValue = document.querySelector('#searchInput').value;

  if (searchValue.trim() === '') {
    loadMovies();
    return;
  }

  const data = await http.search('movie', searchValue);

  clear();
  data.results.forEach(movie => {
    movieList.appendChild(createHtml(movie));
  });
  console.log(data);
  createHtml(data.results);
}

document.addEventListener('DOMContentLoaded', initApp);
searchForm.addEventListener('submit', handleSearch);