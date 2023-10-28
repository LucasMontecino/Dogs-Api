import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import DogCreate from "./components/DogCreate";
import DogDetail from "./components/DogDetail";
import axios from "axios";

// axios.defaults.baseURL = "https://dogs-api-gkk4.onrender.com";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dog" component={DogCreate} />
        <Route exact path="/home/:id" component={DogDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
