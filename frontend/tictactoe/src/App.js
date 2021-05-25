import './styles/App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Application from './components/application';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/app" component={Application} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
