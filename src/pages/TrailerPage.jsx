import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import RatingSystem from '../components/RatingSystem.jsx';

export default function TrailerPage() {
  const {
    movie: { title, poster_path, overview, backdrop_path, trailer, movieId },
  } = useLoaderData();
  const navigate = useNavigate();

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342/"

  const handleCreateRating = async (event, { score }) => {
    event.preventDefault();
    const res = await axios.post('/api/ratings', { score: score, movieId: movieId });
    if (res.data) {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <img src={poster_path ? IMAGE_PATH + poster_path : ''} alt={title} style={{ width: '200px' }} />
      <p>{overview}</p>
      <h2>Rate this movie</h2>
      <RatingSystem onCreateRating={handleCreateRating} />
    </>
  );
}
