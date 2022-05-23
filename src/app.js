const { addMovie, listMovies } = require("./utils"); /* Function imports */

// Main app function to hold business logic, accepts an input array (process.argv)
const app = (inputArr) => {
  // Switch statement to cover 1 or 2 movies
  switch (inputArr[2]) {
    case "add":
      // Declare empty movie object for adding title/actor to
      const movieObj = {};
      // Check for actor command
      if (inputArr[3] === "actor") {
        // Adding key value pairs into movie object
        movieObj.title = inputArr[4];
        movieObj.actor = inputArr[5];
      } else {
        movieObj.title = inputArr[3];
      }
      // Add movie to array
      addMovie(movieObj);
      // Return array for terminal output
      console.log(listMovies());
      break;
    case "add multi":
      // Two movie objects created for both movies
      const movie1 = {};
      const movie2 = {};
      // Check for actor command
      if (inputArr[3] === "actor") {
        // Adding key value pairs to both objects
        movie1.title = inputArr[4];
        movie1.actor = inputArr[5];
        movie2.title = inputArr[6];
        movie2.actor = inputArr[7];
      } else {
        movie1.title = inputArr[3];
        movie2.title = inputArr[4];
      }
      // Add both movies
      addMovie(movie1);
      addMovie(movie2);
      // Return array for terminal output
      console.log(listMovies());
      break;
    default:
      // Error catching
      console.log("Incorrect command");
      break;
  }
};

//Call the app function and pass the argument vector in as a parameter
app(process.argv);
