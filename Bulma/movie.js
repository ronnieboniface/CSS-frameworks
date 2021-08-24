class Movie {
  static container = document.getElementById('film-container');

  constructor({title, description, director, producer, release_date, running_time}){
    this.title = title;
    this.plot = description.length > 500 ? `${description.slice(0, 500)}...` : description;
    this.director = director;
    this.producer = producer;
    this.releaseDate = release_date;
    this.runTime = running_time;
  };

  renderMovieCard() {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const movieContent = this.renderMovieInfo()
    movieCard.appendChild(movieContent)

    Movie.container.appendChild(movieCard);
  };

  renderMovieInfo() {
    const cardContent = document.createElement('div');

    cardContent.classList.add('card-content', 'movie-info');

    cardContent.innerHTML = `
      <h1 class="movie-title">
        ${this.title}
      </h1>
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