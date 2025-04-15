import * as http from '../../lib/helpers/httpClient.js';

const movieList = document.querySelector('#top-movies');
const searchForm = document.querySelector('#searchForm');
const pageNumber = document.querySelector('#pageNo');
const numberOfPages = document.querySelector('#pages');
const pagination = document.querySelectorAll('.pagination-btn');

// Global fil variabel...
let searchValue = undefined;

const initApp = () => {
  pagination.forEach((page) => page.addEventListener('click', moveToPage));
  loadMovies();
};

const loadMovies = async (page = 1) => {
  let data = null;

  if (!searchValue) {
    data = await http.get('discover/movie', page);
  } else {
    data = await http.search('movie', searchValue, page);
  }

  displayPagination(data);
  clear();

  console.log(data);

  data.results.forEach((movie) => {
    movieList.appendChild(createHtml(movie));
  });
};

const displayPagination = (data) => {
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  pageNumber.innerHTML = data.page;
  numberOfPages.innerHTML = pages;
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

  searchValue = document.querySelector('#searchInput').value;

  if (searchValue.trim() === '') {
    searchValue = undefined;
  }

  loadMovies();
};

const moveToPage = (e) => {
  const id = e.target.parentElement.id;
  let page;
  switch (id) {
    case 'gotoFirst':
      loadMovies();
      break;
    case 'gotoNext':
      page = +pageNumber.innerHTML;
      page < +numberOfPages.innerHTML ? page++ : 500;
      loadMovies(page);
      break;
    case 'gotoPrevious':
      page = +pageNumber.innerHTML;
      page > 1 ? page-- : 1;
      loadMovies(page);
      break;
    case 'gotoLast':
      loadMovies(+numberOfPages.innerHTML);
      break;
  }
};

document.addEventListener('DOMContentLoaded', initApp);
searchForm.addEventListener('submit', handleSearch);
