import { useHistory } from 'react-router-dom';

function ThankYou() {
  const history = useHistory();

  const returnHome = () => {
    history.push('/feeling');
  };

  return (
    <div>
      <h3>Thank You!!!</h3>
      <button data-testid="next" onClick={returnHome}>
        Leave New Feedback
      </button>
    </div>
  );
}

export default ThankYou;
