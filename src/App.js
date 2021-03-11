import './App.css';
import TodoContainer from './components/TodoContainer.js';
import NoMatch from './components/NoMatch.js';
import NavBar from './components/NavBar.js';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SinglePage from './components/SinglePage';

function App() {
  const { url, path } = useRouteMatch()
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path={`${url}`} component={TodoContainer} />
        <Route path={`${path}/:slug`} component={SinglePage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
