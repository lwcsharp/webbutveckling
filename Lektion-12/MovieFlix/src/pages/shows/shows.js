import * as http from '../../lib/helpers/httpClient.js';

const showList = document.querySelector('#top-shows');
const searchForm = document.querySelector('#searchForm');

const initApp = () => {
  loadShows();
};

const loadShows = async () => {
  const data = await http.get('tv/popular');

  clear();

  data.results.forEach((show) => {
    showList.appendChild(createHtml(show));
  });
};

const createHtml = (show) => {
  const display = document.createElement('div');

  let html = `
      <section class="card">
        <a href="./show-details.html?id=${show.id}">
        ${
          show.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}"/>`
            : `<img src="../../assets/images/No-Image.jpg" alt="${show.name}"/>`
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

  display.innerHTML = html;
  return display;
};

const clear = () => {
  showList.innerHTML = '';
};

// Event handling...
const handleSearch = async (e) => {
  e.preventDefault();

  const searchValue = document.querySelector('#searchInput').value;

  if (searchValue.trim() === '') {
    loadShows();
    return;
  }

  const data = await http.search('tv', searchValue);

  clear();
  data.results.forEach((show) => {
    showList.appendChild(createHtml(show));
  });
};

document.addEventListener('DOMContentLoaded', initApp);
searchForm.addEventListener('submit', handleSearch);
