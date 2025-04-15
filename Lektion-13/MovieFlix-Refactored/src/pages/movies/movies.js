import * as http from '../../lib/helpers/httpClient.js';

import Media from '../../lib/Media.js';
import * as dom from '../../lib/dom.js';

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

  const movies = data.results.map(
    (movie) =>
      new Media(movie.id, movie.title, movie.release_date, movie.poster_path)
  );

  displayPagination(data);
  clear();

  movies.forEach((movie) => {
    movieList.appendChild(dom.createDisplayMediaCard(movie, 'movie'));
  });
};

const displayPagination = (data) => {
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  pageNumber.innerHTML = data.page;
  numberOfPages.innerHTML = pages;
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
