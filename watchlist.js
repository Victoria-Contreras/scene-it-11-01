const localWatchlist = localStorage.getItem('watchlist')
const watchListUsable = JSON.parse(localWatchlist);
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".watchlist-container").innerHTML = renderWatchlist(watchListUsable);

})

function renderWatchlist(listArray) {
    console.log(listArray)
     watchlistHtmlArray = listArray.map(function (currentMovie) {
        return `
            <div class="movie card text-center">
                <img class="card-img-top" src="${currentMovie.Poster}" />
                <div class="card-body">
                    <h3 id="movie-title" class="card-text fs-5">${currentMovie.Title}</h3>    
                    <p id="release-date">${currentMovie.Year}</p>
                </div>
            </div>
        `
    })
    return watchlistHtmlArray.join('')
}
