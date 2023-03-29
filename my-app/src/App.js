import "./App.css";
import { movies } from "./Movies";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";
import MoviePage from "./pages/MoviePage";
import FooterComponent from "./components/FooterComponent";
import HeaderNavComponent from "./components/HeaderNavComponent";


const list = movies;

function App() {
  console.log(list);
  return (
    <>
      <BrowserRouter>
      <HeaderNavComponent/>
        <Routes>
          <Route path="/" element={<HomePage list={list} />} />
          <Route path="/schedule" element={<SchedulePage list={list} />} />
          <Route path="/movie/:id"element={<MoviePage/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>


    </>
  );
}

export default App;
