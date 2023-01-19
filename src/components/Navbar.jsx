import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { getAnimeSearch } from "../settings";

export const Navbar = ({
  setAllSearchResults,
  searchAnime,
  setSearchAnime,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    getAnimeSearch(searchAnime).then(setAllSearchResults).catch(console.error);
  }, [searchAnime]);

  return (
    <div className="navbar bg-base-100 pr-8">
      <div className="navbar-start flex gap-8">
        <div className="dropdown">
          <label
            onClick={() => setShowMenu(!showMenu)}
            tabIndex={0}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          {showMenu && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li onClick={() => setShowMenu(!showMenu)}>
                <Link className="active:bg-base-100" to={"/"}>
                  Home
                </Link>
              </li>
              <li onClick={() => setShowMenu(!showMenu)}>
                <Link className="active:bg-base-100" to={"/recent-release"}>
                  Recent release
                </Link>
              </li>
              <li onClick={() => setShowMenu(!showMenu)}>
                <Link className="active:bg-base-100" to={"/movies"}>
                  Movies
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="navbar-center">
          <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">
            AnimeAc
          </NavLink>
        </div>
      </div>

      <form className="w-1/2 flex justify-between px-4">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered focus:outline-none w-full max-w-md"
          onChange={(e) => setSearchAnime(e.target.value)}
          value={searchAnime}
        />
      </form>
      <NavLink to="/">
        <img src="/Black_Bull.webp" alt="Black_Bull" className="w-10 ml-4" />
      </NavLink>
    </div>
  );
};
