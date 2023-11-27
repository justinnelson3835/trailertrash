import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardBody, CardImg, Container, Row, Col } from 'react-bootstrap';

export default function MovieListPage() {
  const { movies } = useLoaderData();

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342/"

  const movieListItems = movies.map(({ movieId, title, poster_path }) => (
<Card key={movieId}>
<Link to={`/movies/${movieId}`}>
          <CardImg src={poster_path ? IMAGE_PATH + poster_path : ''} alt={title} />
             
              <CardBody>

                  <Card.Title>{title}</Card.Title>
                  
              </CardBody>
</Link>          
      </Card>
  ));

  return (
    <>
      <h1>All Movies</h1>
      <div className="row row-cols-4 row-cols-md-4">
      {movieListItems}
      </div>
    </>
  );
}
