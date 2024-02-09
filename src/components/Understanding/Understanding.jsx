import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [understanding, setUnderstanding] = useState('');

  const saveUnderstanding = (event) => {
    setUnderstanding(event.target.value);
  };

  const nextField = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_UNDERSTANDING',
      payload: understanding,
    });
    history.push('/support');
  };

  return (
    <div>
      <h3>How well are you understanding the content?</h3>
      <form onSubmit={nextField}>
        <input
          type="number"
          step="1"
          min="1"
          max="5"
          onChange={saveUnderstanding}
        />
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}

export default Understanding;
