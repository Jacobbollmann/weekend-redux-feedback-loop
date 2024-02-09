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
    <div>
      <h3>Any comments you want to leave?</h3>
      <form onSubmit={nextField}>
        <input type="text" placeholder="Comments" onChange={updateComments} />
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}

export default Comments;
