import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItems({ item }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItems;
