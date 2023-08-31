import logo from './book.jpg';
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img className='logo' alt="Logo" src={logo} />
      </header>
      <Dictionary />
      <footer>
        Coded by Laura on <a href='https://github.com/elera96/dictionary'>Github</a>
      </footer>
    </div>
  );
}

export default App;
