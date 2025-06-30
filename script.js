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

  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    console.log("You selected 'Comedy'");
  } else if (selectedGenre === "Action") {
    console.log("You selected 'Action'");
  } else if (selectedGenre === "Drama") {
    console.log("You selected 'Drama'");
  } else if (selectedGenre === "Sci-Fi") {
    console.log("You selected 'Sci-Fi'");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: !`;
});
