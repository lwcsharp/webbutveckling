import * as http from '../../lib/helpers/httpClient.js';

const initApp = () => {
  loadMovie();
};

const loadMovie = async () => {
  const id = location.search.split('=')[1];
  const data = await http.get(`movie/${id}`);

  document.querySelector('#details').appendChild(createHtml(data));
  document.querySelector('#details').appendChild(createBackgroundOverlay(data));
};

const createHtml = (movie) => {
  const movieInfo = document.createElement('div');

  movieInfo.innerHTML = `
  <div class="details-top">
    <div>
      ${
        movie.poster_path
          ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>`
          : `<img src="../assets/images/No-Image.jpg" alt="${movie.title}"/>`
      }
    </div>
    <div class="info">
      <h2>${movie.title}</h2>
      <p>
        <i class="fas fa-star rating"></i>
        ${movie.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">
        Premiär: ${movie.release_date}
      </p>
      <p>${movie.overview}</p>
      <h5>Genre</h5>
      <ul>
        ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
      </ul>
      <p class="text-muted">Spellängd: ${Math.floor(movie.runtime / 60)} tim ${
    movie.runtime % 60
  } min</p>
    </div>
  </div>`;
  return movieInfo;
};

const createBackgroundOverlay = (movie) => {
  const overlayDiv = document.createElement('div');

  overlayDiv.style.backgroundImage = movie.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
    : 'null';

  // overlayDiv.classList.add('overlay');
  // overlayDiv.style.display = 'block';
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'none';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.3';

  return overlayDiv;
};

document.addEventListener('DOMContentLoaded', initApp);
