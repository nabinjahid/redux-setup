import type { RootState } from "@/redux/store";
import type { ITask } from "@/Types/taskTypes";
import { createSlice } from "@reduxjs/toolkit";

interface InitalState {
    tasks:ITask[] ;
    filter:"all" | "high" | "medium" | "low"
}

const initialState: InitalState = {
    tasks: [
        {
            id: "skdfjkdr",
            title:"Initialized frontend",
            description: "created Home page, and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        }
    ],
    filter:"all"
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{}
})

export const selecTasks = (state:RootState)=>{
    return state.todo.tasks
}
export const selecFilter = (state:RootState)=>{
    return state.todo.filter
}

export default taskSlice.reducer