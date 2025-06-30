// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create an empty array for the movie list
  let movieList = [];

  // Push movie titles directly to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    // Add Comedy movies
    movieList.push("The Mask");
    movieList.push("Dumb and Dumber");
    movieList.push("Superbad");
    movieList.push("Home Alone");
  } else if (selectedGenre === "Action") {
    // Add Action movies
    movieList.push("Die Hard");
    movieList.push("Mad Max: Fury Road");
    movieList.push("John Wick");
    movieList.push("The Avengers");
  } else if (selectedGenre === "Drama") {
    // Add Drama movies
    movieList.push("Forrest Gump");
    movieList.push("The Shawshank Redemption");
    movieList.push("The Godfather");
    movieList.push("A Beautiful Mind");
  } else if (selectedGenre === "Sci-Fi") {
    // Add Sci-Fi movies
    movieList.push("Inception");
    movieList.push("The Matrix");
    movieList.push("Interstellar");
    movieList.push("Star Wars");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}!`;
});
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
