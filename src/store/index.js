// import {createStore} from 'redux'
//
// function counter(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }
// export let store = createStore(counter);


// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });
// // 2
// store.dispatch({ type: 'DECREMENT' });
// 1

import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
