import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Banner from "./components/Banner";
import ActivityModal from "./components/ActivityModal";
import Home from "./pages/Home";
import Week from "./components/Week";

function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
