import { useSelector } from 'react-redux';

function Review() {
  const feedback = useSelector((state) => state.feedback);

  return (
    <div>
      <h3>Review Your Feedback</h3>
      <p>Feelings: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.support}</p>
      <p>Comments: {feedback.comments}</p>
      <button>Submit</button>
    </div>
  );
}

export default Review;
