import './App.css';
import {Route} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Home } from './components/Home/Home';
import CreateForm from './components/CreatePokemon/CreatePokemon';
import Detail from './components/Detail/Detail';
import NotFound from './components/404/404';
import axios from 'axios';
axios.defaults.baseURL="https://pi-pokemon-main-production-20c7.up.railway.app/";


function App() {
  const history=useHistory()
  return (
  
    <div className="App">
      <Route path='/404' component={NotFound} />
      <Route exact path={'/'}>
        <LandingPage />
      </Route>
      <Route exact path={'/home'}>
        <Home />
      </Route>
      <Route exact path={'/create'} component={CreateForm}/>
      <Route exact path={`/home/:id`} component={Detail}/>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
    </div>
  
  );
}

export default App;
