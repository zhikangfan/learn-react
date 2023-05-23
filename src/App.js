
import './App.css';
import FlyInto from './components/FlyInto'
import {Test2} from "./components/test2";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./store/slice/counterSlice";
import {Link, Route, Routes} from "react-router-dom";
import Help from "./help";
import Main from './Main';

function App() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className="App">
        {count}
          Hello world

        <Link to={'/help'}>Help</Link>
        <Link to={'/'}>Main</Link>
        <Routes>
            <Route path={"/"} element={<Main />}></Route>

        </Routes>
        <div style={{position: 'fixed', top: 20, left: 50, backgroundColor: 'red'}}>
            <Routes>
                <Route path={"/help"} element={<Help />}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default App;
