import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetail.css";
import names from "../names";
const highlightNames = (description) => {
  let highlightedDescription = description;
  names.forEach((name) => {
    const regex = new RegExp(`\\b${name}\\b`, "g");
    highlightedDescription = highlightedDescription.replace(
      regex,
      `<span class="highlight-name">${name}</span>`
    );
  });
  return highlightedDescription;
};

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        console.log("Movie data fetched:", response.data);
        setMovie(response.data);
      })
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h1 className="movie-title">{movie.title}</h1>
      {/* {movie.image_url ? (
          <img src={movie.image_url} alt={movie.title} className="movie-image" />
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )} */}
      <p
        className="movie-description"
        dangerouslySetInnerHTML={{
          __html: highlightNames(movie.long_description),
        }}
      ></p>
    </div>
  );
};

export default MovieDetail;
