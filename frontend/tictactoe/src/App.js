import './styles/App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Registo from './components/register';
import Application from './components/application';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registo" component={Registo} />
          <Route path="/app" component={Application} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
