import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExternalData></ExternalData>
      </header>
    </div>
  );
}

function ExternalData(){
  return(
    <div>
      <h2>External User</h2>
    </div>
  )
}

export default App;
