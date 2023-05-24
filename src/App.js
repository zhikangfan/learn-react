
import './App.css';
import {Route, Routes} from "react-router-dom";
import Help from "./pages/help";
import Main from './pages/main';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Main />}></Route>
            <Route path={'/help'} element={<Help/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
