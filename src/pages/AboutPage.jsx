import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
      </div>
      <p>
        <a href="/">Back to Home Page</a>
      </p>
    </Card>
  );
}

export default AboutPage;
