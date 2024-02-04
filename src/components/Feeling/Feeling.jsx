function Feeling() {
  return (
    <div>
      <h3>How are you feeling today?</h3>
      <form action="">
        <select name="feeling" id="feel">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </form>
      <button>Next</button>
    </div>
  );
}

export default Feeling;
