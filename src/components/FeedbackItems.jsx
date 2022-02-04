import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItems({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItems;
