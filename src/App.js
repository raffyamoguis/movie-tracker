import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import AppBar from './components/AppBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieLayout from './pages/MovieLayout';
import { useRouteOnHome } from './helper/Helper.js'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <AppBar />
      {useRouteOnHome() && <Home />}
      <Routes>
        <Route element={<MovieLayout />}>
          <Route path="/movie/:name" element={<Movie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
