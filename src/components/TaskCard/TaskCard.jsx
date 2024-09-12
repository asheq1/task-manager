

const TaskCard = ({task, deleteTask, completeTask}) => {
    return (
        <div className={`p-4 rounded-lg shadow-md ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
            <h3 className="text-xl font-semibold">{task.taskName}</h3>    
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Category: {task.category}</p>
            <div className="mt-4">
                <button
                    className={`py-1 px-4 rounded mr-2 ${task.completed ? 'bg-yellow-500' : 'bg-green-500'} text-white`}
                    onClick={() => completeTask(task.id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button 
                    className="py-1 px-4 bg-red-500 text-white rounded"
                    onClick={()=> deleteTask(task.id)}>
                    Delete 
                </button>
            </div>
        </div>
    );
};

export default TaskCard;