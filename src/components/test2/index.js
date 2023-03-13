import {store} from "../../store";
import {useState} from "react";

export function Test2() {
    const [number,setNumber] = useState(store.getState())
    store.subscribe(() =>
        setNumber(store.getState())
    );
    return <div>
        Test2:
        {number}
    </div>
}