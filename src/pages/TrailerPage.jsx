import axios from 'axios';
import {useEffect, useState} from "react"
import { useLoaderData, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
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
                             style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${backdrop_path})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
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
                                                width: '100%',
                                                height: '100%',
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
                                    <button onClick={() => setPlaying(false)} className={"button close-video"}>Close
                                    </button>
                                </> :
                                <div className="center-max-size">
                                    <div className="poster-content">
                                        {trailer ?
                                            <button className={"button play-video"} onClick={() => setPlaying(true)}
                                                    type="button">Play
                                                Trailer</button>
                                            : 'Sorry, no trailer available'}
                                        
                                    </div>
                                    
                                </div>
                            }
                            
                        </div>


      <h1>{title}</h1>
      <img src={poster_path ? IMAGE_PATH + poster_path : ''} alt={title} style={{ width: '200px' }} />
      <p>{overview}</p>
      <h2>Rate this movie</h2>
      <RatingSystem onCreateRating={handleCreateRating} />
    </>
  );
}
