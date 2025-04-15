import Media from './Media.js';

export default class MediaDetails extends Media {
  rating;
  genres;
  backgroundImage;

  constructor(
    rating,
    genres,
    overview,
    id,
    title,
    releaseDate,
    backgroundImage,
    posterImage
  ) {
    super(id, title, releaseDate, posterImage);
    this.rating = rating;
    this.genres = genres;
    this.backgroundImage = backgroundImage;
    this.overview = overview;
  }
}
