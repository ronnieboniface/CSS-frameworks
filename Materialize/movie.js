class Movie {
  static container = document.getElementById('film-container');

  constructor({title, description, director, producer, release_date, running_time}){
    this.title = title;
    this.plot = description.length > 450 ? `${description.slice(0, 450)}...` : description;
    // this.plot = description;
    this.director = director;
    this.producer = producer;
    this.releaseDate = release_date;
    this.runTime = running_time;
  };

  renderMovieCard() {
    const movieCard = document.createElement('div');
    movieCard.classList.add('col', 's5', 'movie-card');

    const movieContent = this.renderMovieInfo()
    movieCard.appendChild(movieContent)

    Movie.container.appendChild(movieCard);
  };

  renderMovieInfo() {
    const cardContent = document.createElement('div');

    cardContent.classList.add('movie-info');

    cardContent.innerHTML = `
      <p class="movie-title">
        ${this.title}
      </p>
      <p>
        <span>
          Director:
        </span> 
        ${this.director}
      </p>
      <p>
        <span>
          Producer:
        </span> 
      ${this.producer}
      </p>
      <p>
        <span>
          Release Year:
        </span> 
      ${this.releaseDate}
      </p>
      <p>
        <span>
          Run Time:
        </span> 
      ${this.runTime} minutes
      </p>

      <div class="plot">
        <p>
          Plot
        </p>
        ${this.plot}
      </div>
    `;

    return cardContent;
  };

};