import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App bg-black h-screen">
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Banner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
