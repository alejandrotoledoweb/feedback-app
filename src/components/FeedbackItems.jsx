function FeedbackItems({ item }) {
  return (
    <div>
      <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
      </div>
    </div>
  );
}

export default FeedbackItems;
