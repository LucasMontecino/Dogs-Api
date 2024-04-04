import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import DogCreate from "./components/DogCreate/DogCreate";
import DogDetail from "./components/DogDetail/DogDetail";

axios.defaults.baseURL = "https://dogs-api-7wi7.onrender.com/";
// axios.defaults.baseURL = "http://localhost:3001";

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
