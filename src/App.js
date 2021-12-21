import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <div>
    <Main />
    <BrowserRouter>
     <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
