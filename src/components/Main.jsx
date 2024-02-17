import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  //   console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    }
    else return str;
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className=" h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[35%] p-4 md:p-8">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            {movie?.title}
          </h2>
          <div>
            <button className="border text-black bg-gray-400 py-2 px-5">
              Play
            </button>
            <button className="border text-white hover:bg-white hover:text-black  py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-300 text-sm">
            Released : {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
