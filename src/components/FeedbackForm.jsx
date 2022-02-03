import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelector from './RatingSelector';

function FeedbackForm() {
  const [text, setText] = useState();
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters long');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <RatingSelector select={(rating) => setRating(rating)} />
      <div className="input-group">
        <input
          type="text"
          onChange={handleTextChange}
          placeholder="Write your review"
          value={text}
        />
        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>
      </div>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
