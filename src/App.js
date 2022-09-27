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
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border: '2px solid crimson', margin: '20px', padding: '10px'}}>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
    </div>
  )
}

export default App;
