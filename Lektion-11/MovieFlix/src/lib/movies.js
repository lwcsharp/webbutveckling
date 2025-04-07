import * as http from './helpers/httpClient.js';

const searchForm = document.querySelector("#searchForm");

const initApp = async () => {
  loadMovies();
};

const loadMovies = async () => {
  const data = await http.get('discover/movie');
  console.log("Response data", data);

  data.results.forEach(movie => {
    let html =
      `<section class="card">
        <a href="./movie-details.html?id=${movie.id}">
          ${
            movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w500$%7Bmovie.poster_path%7D" alt="${movie.title}" />`
              : `<img src="../assets/images/No-Image.jpg" alt="${movie.title}" />`
          }
        </a>
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            <small class="text-muted">Premiär datum: ${movie.release_date}</small>
          </p>
        </div>
      </section>` ;

    document.querySelector('#top-movies').innerHTML += html;
  });
};

const handleSearch = async (e) => {
  e.preventDefault();

  // get values from searchbar
  const searchValue = document.querySelector('#searchInput').value;

  if (searchValue.trim() === '') {
    loadMovies();
    return;
  }

  const data = await http.search('movie', searchValue);
  console.log(data);

}

document.addEventListener('DOMContentLoaded', initApp);
searchForm.addEventListener('submit', handleSearch);