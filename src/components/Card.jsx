import React from "react";

export const Card = ({ title, year, url, image }) => {
  return (
    <div className="card w-full h-full bg-base-100 max-h-96 shadow-xl !min-h-[300px]">
      <figure>
        <img src={image} alt={title} className="object-cover w-full" />
      </figure>
      <div className="px-4 py-4">
        <h2 className="card-title">{title}</h2>
        <p>Año de Lanzamiento: {year}</p>
        <div className="card-actions justify-end">
          <a
            href={url}
            target="__blank"
            className="btn btn-outline hover:scale-105 ease-in-out duration-700 transition-all"
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
};
