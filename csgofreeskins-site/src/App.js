import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./pages/About";
import Advertise from "./pages/Advertise";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/advertise' component={Advertise}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
