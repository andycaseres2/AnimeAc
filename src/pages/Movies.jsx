import React, { useState, useEffect } from "react";
import { Content } from "../components/Content";
import { Spinner } from "../components/Spinner";
import { getAnimeMovie } from "../settings";

export const Movies = ({ allSearchResults, setSearchAnime }) => {
  const [animeMovie, setAnimeMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnimeMovie()
      .then((data) => {
        setAnimeMovie(data);
        setLoading(false);
      })
      .catch(console.error);
    return () => {
      setSearchAnime("");
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center items-center py-10 text-4xl font-bold">
        <h1>Movies</h1>
      </div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <Content items={animeMovie} allSearchResults={allSearchResults} />
      )}
    </div>
  );
};
