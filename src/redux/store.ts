import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./fetures/counter/counterSlice"
import tasksReducer from "./fetures/tasks/taskSlice"



const store = configureStore({
    reducer: {
        counter: counterReducer ,
        todo: tasksReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store

