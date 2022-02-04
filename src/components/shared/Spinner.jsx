import spinner from '../assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt="spinner animation"
      style={{ width: '60px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
