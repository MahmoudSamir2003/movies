import Nav from "./components/Nav";
import MoviesList from "./components/MoviesList";
import { Container } from "react-bootstrap";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=91eaaa7e4565e44b479122381301eb6e"
    );
    setMovies(res.data.results);
  };
  //get current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=91eaaa7e4565e44b479122381301eb6e&page=${page}`
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  //to search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=91eaaa7e4565e44b479122381301eb6e&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };

  return (
    <div className="font color-body">
      <Nav search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />

            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
