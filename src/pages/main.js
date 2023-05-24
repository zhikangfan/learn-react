import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/slice/counterSlice";
import DefaultLayout from "../layouts/DefaultLayout";
function Main() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return <DefaultLayout>
        <h1>Main{count}</h1>
        <button onClick={() => {
            dispatch(increment())
        }}>increment</button>
        <button onClick={()=> {
            dispatch(decrement())
        }}>decrement</button>
    </DefaultLayout>
}
export default Main;