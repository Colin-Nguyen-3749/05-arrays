// Comedy movies array
const comedyMovies = [
  "The Mask",
  "Dumb and Dumber",
  "Superbad",
  "Home Alone"
];

// Action movies array
const actionMovies = [
  "Die Hard",
  "Mad Max: Fury Road",
  "John Wick",
  "The Avengers"
];

// Drama movies array
const dramaMovies = [
  "Forrest Gump",
  "The Shawshank Redemption",
  "The Godfather",
  "A Beautiful Mind"
];

// Sci-Fi movies array
const sciFiMovies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Star Wars"
];

// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create an empty array for the movie list
  let movieList = [];

  // Assign the correct movie titles to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    // If Comedy is selected, use comedyMovies array
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    // If Action is selected, use actionMovies array
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    // If Drama is selected, use dramaMovies array
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    // If Sci-Fi is selected, use sciFiMovies array
    movieList = sciFiMovies;
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}!`;
});
