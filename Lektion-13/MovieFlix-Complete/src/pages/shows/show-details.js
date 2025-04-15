import * as http from '../../lib/helpers/httpClient.js';

const initApp = () => {
  loadShow();
};

const loadShow = async () => {
  const id = location.search.split('=')[1];
  const data = await http.get(`tv/${id}`);

  document.querySelector('#details').appendChild(createHtml(data));
  document.querySelector('#details').appendChild(createBackgroundOverlay(data));
};

const createHtml = (show) => {
  const showInfo = document.createElement('div');

  showInfo.innerHTML = `
  <div class="details-top">
    <div>
      ${
        show.poster_path
          ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}"/>`
          : `<img src="../assets/images/No-Image.jpg" alt="${show.name}"/>`
      }
    </div>
    <div class="info">
      <h2>${show.name}</h2>
      <p>
        <i class="fas fa-star rating"></i>
        ${show.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">
        Premiär: ${show.first_air_date}
      </p>
      <p>${show.overview}</p>
      <h5>Genre</h5>
      <ul>
        ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
      </ul>
      <p>
        <div>Antal säsonger ${show.number_of_seasons}</div>
        <div>Antal avsnitt ${show.number_of_episodes}</div>
      </p>
    </div>
  </div>`;
  return showInfo;
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
