export const getAnimePopular = async () => {
  try {
    const res = await fetch("https://gogoanime.consumet.org/popular");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log;
  }
};

export const getAnimeMovie = async () => {
  try {
    const res = await fetch("https://gogoanime.consumet.org/anime-movies");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log;
  }
};

export const getRecentAnime = async () => {
  try {
    const res = await fetch("https://gogoanime.consumet.org/recent-release");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log;
  }
};

export const getAnimeSearch = async (anime) => {
  try {
    const res = await fetch(
      `https://gogoanime.consumet.org/search?keyw=${anime}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log;
  }
};
