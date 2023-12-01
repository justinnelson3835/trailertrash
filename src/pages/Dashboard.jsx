import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardBody, CardImg, Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';


export default function Dashboard() {
  const [ratings, setRatings] = useState(useLoaderData().ratings);


  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342/"

  const handleDelete = async (ratingId) => {
    try {
      await axios.delete(`/api/ratings/${ratingId}`);
      // Update the ratings list after successful deletion
      setRatings((prevRatings) => prevRatings.filter((rating) => rating.ratingId !== ratingId));
    } catch (error) {
      console.error('Error deleting rating:', error);
    }
  };

  const ratingsList = ratings.map(({ ratingId, score, movie, movieId }) => {
    const { title, poster_path } = movie;

    return (
      <Card key={ratingId}>
        <Link to={`/movies/${movieId}`}>
        <CardImg src={poster_path ? IMAGE_PATH + poster_path : ''} alt={`${title} Poster`} />
        </Link>

        <CardBody>
          <Link to={`/movies/${movieId}`}>
          <Card.Title>{title}</Card.Title>
          </Link>
          Score: {score}
          <Button variant="danger" onClick={() => handleDelete(ratingId)}>
            Delete Rating
          </Button>
        </CardBody>
          
      </Card>
    );
  });

  return (
    <>
      <h1>Your Ratings</h1>
      <div className="row row-cols-6 row-cols-md-6">
      {ratingsList}
      </div>
    </>
  );
}
