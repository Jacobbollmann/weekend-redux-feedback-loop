import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// "feeling" INT not null,
// "understanding" INT not null,
// "support" INT not null,
// "comments" text,

function Review() {
  const history = useHistory();
  const feedback = useSelector((state) => state.feedback);

  const feedbackData = {
    feeling: feedback.feeling,
    understanding: feedback.understanding,
    support: feedback.support,
    comments: feedback.comments,
  };

  const submitAndReturn = () => {
    axios
      .post('/api/feedback', feedbackData)
      .then((response) => {
        history.push('/thank-you');
      })
      .catch((error) => {
        console.error(error);
        alert('Something Wrong In Post!');
      });
  };

  return (
    <div>
      <h3>Review Your Feedback</h3>
      <p>Feelings: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.support}</p>
      <p>Comments: {feedback.comments}</p>
      <button data-testid="next" onClick={submitAndReturn}>
        Submit
      </button>
    </div>
  );
}

export default Review;
