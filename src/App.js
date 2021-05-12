import { Switch, Route } from 'react-router';
import './App.css';
import Header from './components/Header'
import Login from './pages/login';
import PeopleList from './pages/peopleList'
import Registration from './pages/registration';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/people" component={PeopleList} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </>
  );
}

export default App;
