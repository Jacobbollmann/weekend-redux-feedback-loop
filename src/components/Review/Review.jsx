import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {
  const history = useHistory();
  const feedback = useSelector((state) => state.feedback);

  const submitAndReturn = () => {
    history.push('/feeling');
  };

  return (
    <div>
      <h3>Review Your Feedback</h3>
      <p>Feelings: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.support}</p>
      <p>Comments: {feedback.comments}</p>
      <button onClick={submitAndReturn}>Submit</button>
    </div>
  );
}

export default Review;
