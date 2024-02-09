import { useHistory } from 'react-router-dom';

function Comments() {
  const history = useHistory();

  const nextField = (event) => {
    event.preventDefault();
    history.push('/review');
  };

  return (
    <div>
      <h3>Any comments you want to leave?</h3>
      <form onSubmit={nextField}>
        <input type="text" placeholder="Comments" />
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}

export default Comments;
