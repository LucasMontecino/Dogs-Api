import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DogCreate from './components/DogCreate/DogCreate';
import DogDetail from './components/DogDetail/DogDetail';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dog" component={DogCreate} />
        <Route exact path="/home/:id" component={DogDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
