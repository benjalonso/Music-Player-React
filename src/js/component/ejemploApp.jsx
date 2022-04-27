import { useEffect, useState } from 'react';
import './App.css';
import { Listado } from './components/Listado';
/* import { Reproductor } from './components/Reproductor'; */
​
function App() {
​
  const [users, setUsers] = useState([]);
​
  const [activeUser, setActiveUser] = useState(null);
​
  useEffect(() => {
    getUsers('https://jsonplaceholder.typicode.com/users');
  }, [])
​
  const getUsers = (url) => {
    setTimeout(() => {
      fetch(url)
        .then(resp => resp.json())
        .then(data => setUsers(data));
    }, 5000)
  }
​
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* <Reproductor /> */}
          <Listado users={users} className="list-group" activeUser={activeUser} setActiveUser={setActiveUser} onClick={() => { alert(1) }} />
        </div>
      </div>
    </div>
  );
}
​
export default App;