function Understanding() {
  return (
    <div>
      <h3>How well are you understanding the content?</h3>
      <form>
        {/* <select name="understand" id="understand">
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

export default Understanding;
