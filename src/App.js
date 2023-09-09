import logo from './book.jpg';
import './App.css';
import Dictionary from './Dictionary Application/Dictionary.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img className='logo' alt="Logo" src={logo} />
       <h1 className='headline'>Dictionary</h1>
      </header>
      <Dictionary defaultKeyword={"books"}/>
      <footer>
        Coded by Laura on <a className='github-link' href='https://github.com/elera96/dictionary'>Github</a>
      </footer>
    </div>
  );
}

export default App;
