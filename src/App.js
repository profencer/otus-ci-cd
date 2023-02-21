import logo from './logo.svg';
import './App.css';
import HelloWorld from 'components/HelloWorld';
const id = () => {};
function App() {
  const handler = () => {};
  return (
    <div className="App">
      <header className="App-header">
        <img onClick={handler} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HelloWorld />
        </a>
      </header>
    </div>
  );
}

export default App;
