export const createDisplayMediaCard = (media, mediaType) => {
  const display = document.createElement('div');

  const detailsPage = mediaType === 'movie' ? 'movie-details' : 'show-details';

  let html = `<section class="card">
      <a href="./${detailsPage}.html?id=${media.id}">
        ${
          media.posterImage
            ? `<img src="https://image.tmdb.org/t/p/w500${media.posterImage}" alt="${media.title}"/>`
            : `<img src="../../assets/images/No-Image.jpg" alt="${media.title}"/>`
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${media.title}</h5>
        <p class="card-text">
          <small class="text-muted">Premiär datum: ${media.releaseDate}</small>
        </p>
      </div>
    </section>`;

  display.innerHTML = html;
  return display;
};

export const createDetailsPage = (media) => {
  const detailsInfo = document.createElement('div');

  detailsInfo.innerHTML = `
  <div class="details-top">
    <div>
      ${
        media.posterImage
          ? `<img src="https://image.tmdb.org/t/p/w500${media.posterImage}" alt="${media.title}"/>`
          : `<img src="../assets/images/No-Image.jpg" alt="${media.title}"/>`
      }
    </div>
    <div class="info">
      <h2>${media.title}</h2>
      <p>
        <i class="fas fa-star rating"></i>
        ${media.rating.toFixed(1)} / 10
      </p>
      <p class="text-muted">
        Premiär: ${media.releaseDate}
      </p>
      <p>${media.overview}</p>
      <h5>Genre</h5>
      <ul>
        ${media.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
      </ul>
    </div>
  </div>`;
  return detailsInfo;
};

export const createBackgroundOverlay = (media) => {
  const overlayDiv = document.createElement('div');

  overlayDiv.style.backgroundImage = media.backgroundImage
    ? `url(https://image.tmdb.org/t/p/original/${media.backgroundImage})`
    : 'null';

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
