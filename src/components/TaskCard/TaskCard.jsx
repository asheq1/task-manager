import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const TaskCard = ({task, deleteTask, completeTask}) => {

    useEffect(() => {
        // calculate the number of days until the task is due
        if(task.dueDate){
            const today = new Date();
            const dueDate = new Date(task.dueDate);
            const timeDiff = dueDate - today;
            const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

            if(daysRemaining <= 2 && daysRemaining >= 0){
                toast.warn(`Task "${task.taskName}" is due in ${daysRemaining}`)
            }
        }

    },[task.dueDate, task.taskName])

    return (
        <div className={`p-4 rounded-lg shadow-md ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
            <h3 className="text-xl font-semibold">{task.taskName}</h3>    
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Category: {task.category}</p>
            {task.dueDate && <p className='text-sm text-rose-400'>Due Date: {task.dueDate}</p>}
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

TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired
}

export default TaskCard;