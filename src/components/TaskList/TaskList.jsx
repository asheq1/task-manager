import TaskCard from "../TaskCard/TaskCard";


const TaskList = ({tasks, deleteTask, completeTask}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        completeTask={completeTask} />
                ))
            ) : (<p className="text-center cols-span-2 text-red-500">No tasks avaiable</p>)}            
        </div>
    );
};

export default TaskList;