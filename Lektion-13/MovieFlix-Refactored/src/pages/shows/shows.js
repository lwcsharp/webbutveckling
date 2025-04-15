import * as http from '../../lib/helpers/httpClient.js';
import Media from '../../lib/Media.js';
import * as dom from '../../lib/dom.js';

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
  const shows = data.results.map(
    (show) =>
      new Media(show.id, show.name, show.first_air_date, show.poster_path)
  );

  displayPagination(data);
  clear();

  shows.forEach((show) => {
    showList.appendChild(dom.createDisplayMediaCard(show, 'tv'));
  });
};

const displayPagination = (data) => {
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  pageNumber.innerHTML = data.page;
  numberOfPages.innerHTML = pages;
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
