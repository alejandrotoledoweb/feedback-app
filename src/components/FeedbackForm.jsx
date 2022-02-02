import { useState } from 'react';
import Card from './shared/Card';

function FeedbackForm() {
  const [text, setText] = useState();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <div className="input-group">
        <input
          type="text"
          onChange={handleTextChange}
          placeholder="Write your review"
          value={text}
        />
        <button type="submit">Submit</button>
      </div>
    </Card>
  );
}

export default FeedbackForm;
