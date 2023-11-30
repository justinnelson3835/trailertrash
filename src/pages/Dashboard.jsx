import { Link, useLoaderData } from 'react-router-dom';

export default function Dashboard() {
  const { ratings } = useLoaderData();

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342/"

  const ratingsList = ratings.map(({ ratingId, score, movie, movieId }) => {
    const { title, poster_path } = movie;

    return (
      <li key={ratingId}>
        <Link to={`/movies/${movieId}`}>
        <img src={poster_path ? IMAGE_PATH + poster_path : ''} alt={`${title} Poster`} />
          {title}
          </Link>: {score}
      </li>
    );
  });

  return (
    <>
      <h1>Your Ratings</h1>
      {ratingsList}
    </>
  );
}
