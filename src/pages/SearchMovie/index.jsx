import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movies from "../../assets/data/template.json";
import Navbar from "../../components/Navbar";

const SearchMoviePage = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({ title: "" });
  useEffect(() => {
    setMovie(
      movies.find((movie) => movie.id === parseInt(id)) || {
        title: "not found",
      }
    );
  }, []);

  return (
    <div>
      Search movie by id: {id}
      <h1>{movie.title}</h1>
      <img src={movie.backdrop_path} />
    </div>
  );
};

export default SearchMoviePage;
