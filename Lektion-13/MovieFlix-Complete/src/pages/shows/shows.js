import * as http from '../../lib/helpers/httpClient.js';

const showList = document.querySelector('#top-shows');
const searchForm = document.querySelector('#searchForm');
const pageNumber = document.querySelector('#pageNo');
const numberOfPages = document.querySelector('#pages');
const pagination = document.querySelectorAll('.pagination-btn');

// Global fil variabel...
let searchValue = undefined;
const initApp = () => {
  pagination.forEach((page) => page.addEventListener('click', moveToPage));
  loadShows();
};

const loadShows = async (page = 1) => {
  let data = undefined;

  if (!searchValue) {
    data = await http.get('tv/popular', page);
  } else {
    data = await http.search('tv', searchValue, page);
  }

  displayPagination(data);
  clear();

  data.results.forEach((show) => {
    showList.appendChild(createHtml(show));
  });
};

const displayPagination = (data) => {
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  pageNumber.innerHTML = data.page;
  numberOfPages.innerHTML = pages;
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

  searchValue = document.querySelector('#searchInput').value;

  if (searchValue.trim() === '') {
    searchValue = undefined;
  }

  loadShows();
};

const moveToPage = (e) => {
  const id = e.target.parentElement.id;
  let page;
  switch (id) {
    case 'gotoFirst':
      loadShows();
      break;
    case 'gotoNext':
      page = +pageNumber.innerHTML;
      page < +numberOfPages.innerHTML ? page++ : 500;
      loadShows(page);
      break;
    case 'gotoPrevious':
      page = +pageNumber.innerHTML;
      page > 1 ? page-- : 1;
      loadShows(page);
      break;
    case 'gotoLast':
      loadShows(+numberOfPages.innerHTML);
      break;
  }
};

document.addEventListener('DOMContentLoaded', initApp);
searchForm.addEventListener('submit', handleSearch);
