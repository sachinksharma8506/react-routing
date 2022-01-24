import './App.css';
import About from './Component/about';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About />
        <p>
          Edit123 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
