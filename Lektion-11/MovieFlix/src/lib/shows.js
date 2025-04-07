import * as http from './helpers/httpClient.js';

const initApp = () => {
  loadShows();
};

const loadShows = async () => {
  const data = await http.get('tv/popular');
  console.log(data);

  data.results.forEach((show) => {
    let html = `
      <section class="card">
        <a href="./show-details.html?id=${show.id}">
        ${
          show.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}"/>`
            : `<img src="../assets/images/No-Image.jpg" alt="${show.name}"/>`
        }
        </a>
        <div class="card-body">
          <h5 class="card-title">${show.name}</h5>
          <p class="card-text">
            <small class="text-muted">Premiär datum: ${
              show.first_air_date
            }</small>
          </p>
        </div>
      </section>`;

    document.querySelector('#top-series').innerHTML += html;
  });
};

document.addEventListener('DOMContentLoaded', initApp);
