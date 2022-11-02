document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".movies-container").innerHTML = renderMovies(movieData);
});

function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `
            <div class="movie card text-center">
                <img class="card-img-top" src="${currentMovie.Poster}" />
                <div class="card-body">
                    <h3 id="movie-title" class="card-text fs-5">${currentMovie.Title}</h3>    
                    <p id="release-date">${currentMovie.Year}</p>
                </div>
                <div class="card-footer">
                    <button>Add</button>
                </div>
            </div>
        `
    })
    return movieHtmlArray.join('')
}

// Pick up at part 1 step 3