const movies = [];

exports.addMovie = (movieObj) => {
  // take a movieObj, add it to an array and then return the array
  movies.push(movieObj);
};

exports.listMovies = () => {
  return movies;
};
