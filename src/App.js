import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserLogin from './component/UserLogin'
import UserSignUp from './component/UserSignUp'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={UserLogin}
          />
          <Route
            exact
            path='/signup'
            component={UserSignUp}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
