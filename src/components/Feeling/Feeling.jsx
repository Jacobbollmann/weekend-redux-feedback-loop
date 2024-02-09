import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [feelings, setFeelings] = useState(0);

  const saveFeeling = (event) => {
    setFeelings(event.target.value);
    console.log(feelings);
  };

  const nextField = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_FEELINGS',
      payload: feelings,
    });
    history.push('/understanding');
  };

  return (
    <div>
      <h3>How are you feeling today?</h3>
      <form onSubmit={nextField}>
        <input type="number" step="1" min="1" max="5" onChange={saveFeeling} />
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}

export default Feeling;
