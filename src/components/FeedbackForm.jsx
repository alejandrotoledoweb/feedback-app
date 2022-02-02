import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

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
        <Button type="submit">Send</Button>
      </div>
    </Card>
  );
}

export default FeedbackForm;
