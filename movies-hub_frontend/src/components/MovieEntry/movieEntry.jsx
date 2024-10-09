import React, { useState } from 'react';
import '../Css/movie.css'; 

const MovieEntry = () => {
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    year: '',
    genre: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Movie data submitted:', movie);
    setMovie({
      title: '',
      director: '',
      year: '',
      genre: ''
    });
  };

  return (
    <div className="movie-entry-container">
      <h2>Movie Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={movie.year}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Movie</button>
      </form>
    </div>
  );
};

export default MovieEntry;
