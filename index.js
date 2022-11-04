document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-button')) {
            const movieID = e.target.dataset.imdbid;
            saveToWatchlist(movieID);
            
        }
    })
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
                    <button class="add-button" data-imdbid="${currentMovie.imdbID}">Add</button>
                </div>
            </div>
        `
    })
    return movieHtmlArray.join('')
}

const myForm = document.getElementById('search-form');
    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchString = document.getElementById('search-result').value;
        const urlEncodedSearchString = encodeURIComponent(searchString);
        fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector(".movies-container").innerHTML = renderMovies(data.Search);
        })
})

function saveToWatchlist(movieID) {
    console.log(movieID)
    const movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == movieID; 
    })
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}
