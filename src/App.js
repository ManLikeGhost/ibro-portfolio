import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-my-app' component={About}/>
      </Switch>
      
    </Router>
    
    
  );
}

export default App;
