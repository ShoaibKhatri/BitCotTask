import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
