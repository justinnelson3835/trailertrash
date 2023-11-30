import { useState } from 'react';
import '../css/RatingSystem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpsterFire } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

export default function RatingSystem({ onCreateRating }) {
  const [scoreValue, setScoreValue] = useState('');

  const handleRadioChange = (value) => {
    setScoreValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateRating(e, { score: scoreValue });
  };

  return (
    <form onSubmit={handleSubmit} className="rating-container">
      <label></label>
      {[1, 2, 3, 4, 5].map((value) => (
        <label key={value} className="rating-label">
          <input
            type="radio"
            name="score"
            value={value}
            checked={scoreValue === value}
            onChange={() => handleRadioChange(value)}
          />
          <FontAwesomeIcon icon={faDumpsterFire} />
        </label>
      ))}
      <Button variant="danger" type="submit">
       Submit
      </Button>
    </form>
  );
}
