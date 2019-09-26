import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import List from '../List/List';
import LoginPage from '../Login/LoginPage';

function App() {
  return (
    <>
      <header className="bg-primary">
        <nav className="navbar">
          <NavLink to="/" className="navbar-brand text-white">
            Templates
          </NavLink>
            <ul className="row">
              <li className="nav-item">
                <NavLink to="/login" className="nav-link  text-white" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link  text-white" activeClassName="active">
                  Register
                </NavLink>
              </li>
            </ul>
        </nav>
      </header>
      <main className="container-fluid py-4">
        <Switch>
          <Route path='/' exact component={List} />
          <Route path='/login' exact component={LoginPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
