const searchInput = document.querySelector('#searchInput');
const button = document.querySelector('#button');
const movieList = document.querySelector('#movieList');

// function getMovie(title) {
//     let moviePromise = fetch(`http://www.omdbapi.com/?apikey=a6f4bb37&t=${title}`);
//     moviePromise
//     .then(res => {
//         const dataPromise = res.json();
//         console.log(dataPromise);
//         return dataPromise
//     })
//     .then(data => {
//         console.log(data);
//         renderMovie(data);
//     })
//     .catch( err => alert(err))
// };

// function renderMovie (movie) {
//     movieList.innerHTML = `
//     <div class="card" style="width: 18rem">
//         <img src="${movie.Poster}" class="img-thumbnail" alt="${movie.Title}" />
//         <div class="card-body">
//             <h5 class="card-title">${movie.Title}</h5>
//             <p class="card-text">Actors: ${movie.Actors}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">Year: ${movie.Year}</li>
//             <li class="list-group-item">Genre: ${movie.Genre}</li>
//             <li class="list-group-item">Rating: ${movie.imdbRating}</li>
//         </ul>
//     </div>
//     `
// };

function getMovieSearch(title) {
    let moviePromise = fetch(`http://www.omdbapi.com/?apikey=a6f4bb37&s=${title}`);
    moviePromise
    .then(res => {
        const dataPromise = res.json();
        console.log(dataPromise);
        return dataPromise
    })
    .then(data => {
        console.log(data.Search);
        renderMovieSearch(data.Search);
    })
    .catch( err => alert(err))
};

function renderMovieSearch (movie) {
    movieList.innerHTML = movie?.map(el => `
    <div class="card m-3" style="width: 18rem;">
    <img src="${el.Poster}" class="card-img-top" alt="${el.Title}">
    <div class="card-body">
      <h5 class="card-title">${el.Title}</h5>
      <p class="card-text">Year: ${el.Year}</p>
      <p class="card-text">Type: ${el.Type}</p>
  
    </div>
  </div>
    `).join('')
};

searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        movieTitle = this.value;
        getMovieSearch(movieTitle)
    }
});

button.addEventListener('click', function(){
    movieTitle = searchInput.value;
    getMovieSearch(movieTitle);
});