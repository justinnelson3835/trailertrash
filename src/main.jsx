import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.jsx';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import MovieListPage from './pages/MovieListPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TrailerPage from './pages/TrailerPage.jsx';
import Dashboard from './pages/Dashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      {/* Homepage */}
      <Route index element={<IndexPage />} />

      {/* All Movies */}
      <Route
        path="movies"
        element={<MovieListPage />}
        loader={async () => {
          const res = await axios.get('/api/movies');
          return { movies: res.data };
        }}
      />

      {/* Movie detail pages */}
      <Route
        path="movies/:movieId"
        element={<TrailerPage />}
        loader={async ({ params }) => {
          const res = await axios.get(`/api/movies/${params.movieId}`);
          return { movie: res.data };
        }}
      />

      {/* Login */}
      <Route path="login" element={<LoginPage />} />

      {/* Your ratings */}
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={async () => {
          const res = await axios.get('/api/ratings');
          return { ratings: res.data };
        }}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
