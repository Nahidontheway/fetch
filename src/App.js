import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
  const [users, setUsers] = useState([])
  // const arrow =() =>{}
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

export default App;
