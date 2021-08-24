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
    movieCard.classList.add('card', 'border-0', 'movie-card', 'bg-warning', 'col-md-3', 'border-rounded');
    movieCard.style = "width: 30%"

    const movieContent = this.renderMovieInfo()
    movieCard.appendChild(movieContent)

    Movie.container.appendChild(movieCard);
  };

  renderMovieInfo() {
    const cardContent = document.createElement('div');

    cardContent.classList.add('card-body', 'movie-info');

    cardContent.innerHTML = `
      <h3 class="card-title text-center movie-title">
        ${this.title}
      </h3>
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