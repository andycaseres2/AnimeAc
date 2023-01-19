import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { RecentRelease } from "./pages/RecentRelease";
import { Movies } from "./pages/Movies";

function App() {
  const [searchAnime, setSearchAnime] = useState("");
  const [allSearchResults, setAllSearchResults] = useState([]);

  return (
    <div className="w-full h-full">
      <Navbar
        setAllSearchResults={setAllSearchResults}
        searchAnime={searchAnime}
        setSearchAnime={setSearchAnime}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              allSearchResults={allSearchResults}
              setSearchAnime={setSearchAnime}
            />
          }
        />
        <Route
          path="/recent-release"
          element={
            <RecentRelease
              allSearchResults={allSearchResults}
              setSearchAnime={setSearchAnime}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              allSearchResults={allSearchResults}
              setSearchAnime={setSearchAnime}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
