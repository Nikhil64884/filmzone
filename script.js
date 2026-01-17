const moviesData = {
    bollywood: [
        { id: 1, title: "Pathaan", year: "2023", rating: 8.2, genre: "Action", poster: "https://m.media-amazon.com/images/M/MV5BM2QzOGU2ZGYtNzlkOS00NTFmLWJiNzgtNjc5YjQzODg0OWFhXkEyXkFqcGc@._V1_.jpg" },
        { id: 2, title: "Jawan", year: "2023", rating: 8.5, genre: "Action", poster: "https://m.media-amazon.com/images/M/MV5BNjk4YTUxMzktN2I0OC00YzlkLWI4ZTgtMDMxMjA3OWY0MjE1XkEyXkFqcGc@._V1_.jpg" },
        { id: 3, title: "Animal", year: "2023", rating: 7.8, genre: "Crime", poster: "https://m.media-amazon.com/images/M/MV5BNGVlNGZlZTktNTQzMy00ODliLTk1ZjMtZTVlZDY2NDI0ZGYxXkEyXkFqcGc@._V1_.jpg" },
        { id: 4, title: "12th Fail", year: "2023", rating: 9.0, genre: "Drama", poster: "https://m.media-amazon.com/images/M/MV5BZTg2ZjU1NzktNmU3MS00YTFhLWIwNmEtN2Q5YzA4YzJiZjMwXkEyXkFqcGc@._V1_.jpg" }
    ],
    hollywood: [
        { id: 5, title: "Oppenheimer", year: "2023", rating: 8.9, genre: "Biography", poster: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg" },
        { id: 6, title: "Dune: Part Two", year: "2024", rating: 8.7, genre: "Sci-Fi", poster: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg" },
        { id: 7, title: "The Batman", year: "2022", rating: 8.0, genre: "Action", poster: "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4MzgwYjY1XkEyXkFqcGc@._V1_.jpg" },
        { id: 8, title: "Avengers: Endgame", year: "2019", rating: 8.4, genre: "Action", poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" }
    ]
};

function createMovieCard(movie) {
    return '<div class="movie-card"><div class="movie-poster"><img src="' + movie.poster + '" alt="' + movie.title + '" loading="lazy"><div class="movie-rating">* ' + movie.rating + '</div></div><div class="movie-info"><h3 class="movie-title">' + movie.title + '</h3><div class="movie-meta">' + movie.year + ' | ' + movie.genre + '</div></div></div>';
}

document.addEventListener('DOMContentLoaded', function() {
    var bollywoodContainer = document.getElementById('bollywoodMovies');
    var hollywoodContainer = document.getElementById('hollywoodMovies');
    if (bollywoodContainer) bollywoodContainer.innerHTML = moviesData.bollywood.map(createMovieCard).join('');
    if (hollywoodContainer) hollywoodContainer.innerHTML = moviesData.hollywood.map(createMovieCard).join('');
});
