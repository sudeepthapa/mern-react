import HomePage from "./components/HomePage";
import { Services } from "./components/Services";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return <Router>
    <Switch>
      <Route path='/movies/:id/watch'>
        <Services />
      </Route>
      <Route path='/services/:id'>
        <Services />
      </Route>
      <Route path='/services'>
        <Services />
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  </Router>
}

export default App;


// Default Export
// Named Export