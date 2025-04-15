export default class Media {
  id;
  title;
  releaseDate;
  posterImage;

  constructor(id, title, releaseDate, posterImage) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.posterImage = posterImage;
  }
}
