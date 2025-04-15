import * as http from '../../lib/helpers/httpClient.js';
import MediaDetails from '../../lib/MediaDetails.js';
import * as dom from '../../lib/dom.js';

const initApp = () => {
  loadMovie();
};

const loadMovie = async () => {
  const id = location.search.split('=')[1];
  const data = await http.get(`movie/${id}`);

  const mediaDetails = new MediaDetails(
    data.vote_average,
    data.genres,
    data.overview,
    data.id,
    data.title,
    data.release_date,
    data.backdrop_path,
    data.poster_path
  );

  document
    .querySelector('#details')
    .appendChild(dom.createDetailsPage(mediaDetails));
  document
    .querySelector('#details')
    .appendChild(dom.createBackgroundOverlay(mediaDetails));
};

document.addEventListener('DOMContentLoaded', initApp);
