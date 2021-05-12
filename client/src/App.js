import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Navbarak from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Logout from './components/Logout'
import Vacations from './components/Vacations'
import Reports from './components/Reports'
import Login from './components/Login'
import Registration from './components/Registration'
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'
import Addvacation from './components/Addvacation';
function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    try {
      const jwt = localStorage.getItem('token')
      const decode = jwt_decode(jwt)
      setUser(decode)
    }
    catch (err) { }
  }, [])




  return (
    <div className="App" style={{ height: "100vh" }}>
      <Navbarak user={user} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registran" component={Registration} />
        <Route path="/Login" component={Login} />
        <Route path="/Logout" component={Logout} />
        <Route path="/vacations" component={Vacations} />
        <Route path="/reports" component={Reports} />
      </Switch>

    </div>
  );
}

export default App;
