import React, { useState, useEffect } from "react";
import { getAnimePopular } from "../settings";
import { Content } from "../components/Content";
import { Spinner } from "../components/Spinner";

export const Home = ({ allSearchResults, setSearchAnime }) => {
  const [animePopular, setAnimePopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnimePopular()
      .then((data) => {
        setAnimePopular(data);
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
        <h1>Popular anime</h1>
      </div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <Content items={animePopular} allSearchResults={allSearchResults} />
      )}
    </div>
  );
};
