import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/slice/counterSlice";
import HelpLayout from "../layouts/HelpLayout";
function Help () {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return <HelpLayout>
        <h1>help{count}</h1>
        <button onClick={() => {
            dispatch(increment())
        }}>increment</button>
        <button onClick={()=> {
            dispatch(decrement())
        }}>decrement</button>
    </HelpLayout>
}

export default Help;