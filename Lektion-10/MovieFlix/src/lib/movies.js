import * as http from './helpers/httpClient.js';

const initApp = () => {
  loadMovies();
};

const loadMovies = async () => {
  const data = await http.get('discover/movie');
  console.log('Response data', data);

  data.results.forEach((movie) => {
    let html = `<section class="card">
      <a href="./movie-details.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Premiär datum: ${movie.release_date}</small>
        </p>
      </div>
    </section>`;

    document.querySelector('#top-movies').innerHTML += html;
  });
};

document.addEventListener('DOMContentLoaded', initApp);
