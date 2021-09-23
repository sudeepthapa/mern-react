import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import AddService from './pages/AddService';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/services/add">
          <AddService />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
