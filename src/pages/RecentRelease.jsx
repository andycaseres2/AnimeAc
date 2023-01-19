import React, { useState, useEffect } from "react";
import { getRecentAnime } from "../settings";
import { Content } from "../components/Content";
import { Spinner } from "../components/Spinner";

export const RecentRelease = ({ allSearchResults, setSearchAnime }) => {
  const [recentRealease, setRecentRealease] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecentAnime()
      .then((data) => {
        setRecentRealease(data);
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
        <h1>Recent releases</h1>
      </div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <Content items={recentRealease} allSearchResults={allSearchResults} />
      )}
    </div>
  );
};
