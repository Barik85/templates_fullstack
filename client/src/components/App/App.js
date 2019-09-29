import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../List/List';
import LoginPage from '../Login/LoginContainer';
import Header from '../header/HeaderContainer';
import TemplatePage from '../TemplatePage/TemplateConatiner';

function App() {
  return (
    <>
      <Header />
      <main className="container-fluid py-4">
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/templates/:id" component={TemplatePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={LoginPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
