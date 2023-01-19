import React from "react";
import { Card } from "../components/Card";

export const CardList = ({ animes }) => {
  return (
    <div className="w-full h-full px-12 md:px-10 md:gap-8 flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-8">
      {animes.map((anime) => (
        <Card
          key={anime.animeId}
          title={anime.animeTitle}
          image={anime.animeImg}
          year={anime.releasedDate ?? anime.status}
          url={anime.animeUrl}
        />
      ))}
    </div>
  );
};
