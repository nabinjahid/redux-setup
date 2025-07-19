import { cn } from "@/lib/utils";
import type { ITask } from "@/Types/taskTypes";
import { Trash2, Check } from "lucide-react";

interface ITaskProps {
    task : ITask
}

const TasksCard = ({task}:ITaskProps) => {
  return (
    <div className="flex justify-between my-4 items-start p-4 rounded-2xl shadow-md border transition-all duration-200 bg-white dark:bg-[#1f1f1f] border-gray-200 dark:border-gray-700 hover:shadow-lg">
      
      {/* Left: Task Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className={cn("w-3 h-3 rounded-full", {
            "bg-green-500": task.priority === "low",
            "bg-yellow-500": task.priority === "medium",
            "bg-red-500": task.priority === "high",
          })}></span>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{task.title}</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
          {task.description}
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 mt-1">
        <button
          className="text-red-500 hover:text-red-600 dark:hover:text-red-400 transition"
          title="Delete"
        >
          <Trash2 size={20} />
        </button>
        <button
          className="w-5 h-5 rounded border border-gray-300 dark:border-gray-600 hover:border-green-500 flex items-center justify-center transition"
          title="Mark as Completed"
        >
          {/* If completed, show check icon */}
          <Check size={14} className="text-green-600 dark:text-green-400" />
        </button>
      </div>
    </div>
  );
};

export default TasksCard;
