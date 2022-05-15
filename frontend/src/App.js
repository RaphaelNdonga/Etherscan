import logo from './logo.svg';
import './App.css';
import BlockInfo from './Components/BlockInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Raphael's Etherscan</h1>
      </header>
      <BlockInfo />
    </div>
  );
}

export default App;
