import axios from 'axios';
import { useState } from "react"
import { useLoaderData, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import { Button } from 'react-bootstrap';
import RatingSystem from '../components/RatingSystem.jsx';


export default function TrailerPage() {
  const {
    movie: { title, poster_path, overview, backdrop_path, trailer, movieId },
  } = useLoaderData();
  const navigate = useNavigate();

  const [playing, setPlaying] = useState(false)

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342/"
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280/"

  const handleCreateRating = async (event, { score }) => {
    event.preventDefault();
    const res = await axios.post('/api/ratings', { score: score, movieId: movieId });
    if (res.data) {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <div className="poster"
                             style={{backgroundImage: `url(${BACKDROP_PATH}${backdrop_path})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                    height: '100vh',
                             }}>
                            {playing ?
                                <>
                                    <YouTube
                                        videoId={trailer}
                                        className={"youtube amru"}
                                        containerClassName={"youtube-container amru"}
                                        opts={
                                            {
                                                width: '640',
                                                height: '360',
                                                playerVars: {
                                                    autoplay: 1,
                                                    controls: 0,
                                                    cc_load_policy: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0,
                                                },
                                            }
                                        }
                                    />
                                    <div className="d-flex justify-content-center">
                                    <Button variant="danger" onClick={() => setPlaying(false)}>Close
                                    </Button></div>
                                </> :
                                <div className="center-max-size">
                                    <div className="d-flex justify-content-center">
                                        {trailer ?
                                            
                                                <Button variant="danger" onClick={() => setPlaying(true)}>
                                                Watch Trailer
                                              </Button>
                                            : 'Sorry, no trailer available'}
                                        
                                    </div>
                                    <h1>{title}</h1>
                                    <p>{overview}</p>
                                </div>
                            }
                            
                        </div>


      <div className="d-flex justify-content-center">
      <h2>Rate This Trailer</h2>
      </div>
      <div className="d-flex justify-content-center">
      <RatingSystem onCreateRating={handleCreateRating} />
      </div>
    </>
  );
}
