import React from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItems';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
