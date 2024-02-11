import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Support() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [support, setSupport] = useState(0);

  const updateSupport = (event) => {
    setSupport(event.target.value);
  };

  const nextField = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_SUPPORT',
      payload: support,
    });
    history.push('/comments');
  };

  return (
    <div className="card">
      <h3>How well are you being supported?</h3>
      <form onSubmit={nextField}>
        <input
          type="number"
          data-testid="input"
          step="1"
          min="1"
          max="5"
          onChange={updateSupport}
          placeholder="Range 1-5"
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

export default Support;
