import { useState } from 'react';

function FeedbackItems() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item');

  return (
    <div>
      <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
      </div>
    </div>
  );
}

export default FeedbackItems;
