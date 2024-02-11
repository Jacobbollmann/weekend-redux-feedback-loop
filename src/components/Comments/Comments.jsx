import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [comments, setComments] = useState('');

  const updateComments = (event) => {
    setComments(event.target.value);
  };

  const nextField = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_COMMENTS',
      payload: comments,
    });
    history.push('/review');
  };

  return (
    <div className="card">
      <h3>Any comments you want to leave?</h3>
      <form onSubmit={nextField}>
        <input
          type="text"
          data-testid="input"
          placeholder="Comments"
          onChange={updateComments}
          className="input-field"
        />
        <input
          type="submit"
          value="Next"
          data-testid="next"
          className="button"
        />
      </form>
    </div>
  );
}

export default Comments;
