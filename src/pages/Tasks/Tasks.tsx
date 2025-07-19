import { useAppSelector } from "@/redux/hook";


const Tasks = () => {

    const tasks = useAppSelector(selecTasks)

    console.log(tasks);
    

    return (
        <div>
            <h1>This is Task page</h1>
        </div>
    );
};

export default Tasks;