import logo from './logo.svg';
import './App.css';
import BlocksTable from './Components/BlocksTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Raphael's Etherscan</h1>
      </header>
      <BlocksTable />
    </div>
  );
}

export default App;
