import logo from './logo.svg';
import './App.css';
import HomePage from './containers/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {UserPage} from './containers/Homepage/UserPage';

function App() {
  
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route exact path="/" exact element={<HomePage/>}/>
          <Route path="/user/:userId" exact element={<UserPage/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
