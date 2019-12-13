import React from "react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import ModalMovie from "./components/modal/Modal";
import Filter from "./components/Filter/Filter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Filter />
        <MovieList />
        <ModalMovie editValue={false} />
      </header>
    </div>
  );
}

export default App;