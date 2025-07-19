import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import TasksCard from "@/module/tasks/TasksCard";
import { selecTasks } from "@/redux/fetures/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Tasks = () => {

    const tasks = useAppSelector(selecTasks)

    console.log(tasks);
    

    return (
        <div className="m-16"> 
            <h1 className="text-4xl text-blue-600">This is Task page</h1>
           <div className="flex justify-between items-center">
             <h1>Tasks</h1>
            <AddTaskModal></AddTaskModal>
           </div>
           <div className="">
             
            {
                tasks.map(task => <TasksCard key={task.id} task={task} ></TasksCard>)
            }
           </div>
        </div>
    );
};

export default Tasks;