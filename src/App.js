import './App.sass';

function App() {
  return (
    <div className="App">
      <h1>Good morning!</h1>
      <form>
        <label>
          Task
          <input type="text" name="task" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
