function Feeling() {
  return (
    <div>
      <h3>How are you feeling today?</h3>
      <form>
        {/* <select name="feeling" id="feel" >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          
        </select> */}
        <input type="number" step="1" min="1" max="5" />
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}

export default Feeling;
