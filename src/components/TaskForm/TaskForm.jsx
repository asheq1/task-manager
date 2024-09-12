import { useContext, useEffect, useRef, useState } from "react";
import { CategoryContext } from "../../utilities/CategoryContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


const TaskForm = ({addTask}) => {
    const [taskName, setTaskname] = useState("");
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [dueDate, setDueDate] = useState("");
    const {categories} = useContext(CategoryContext)

    // use ref to focus on task name
    const taskNameRef = useRef()
    useEffect(()=>{
        taskNameRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        if(taskName === "") return;
        
        // save current date
        const currentDate = new Date().toISOString().split('T')[0];

        addTask({taskName, description, category, dueDate, createdAt: currentDate });
        toast.success("Task added successfully!")
        
        // clear form
        setTaskname("")
        setDescription("")
        setCategory("")
        taskNameRef.current.focus()
    }


    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 w-2/3 mx-auto  rounded shadow-md mb-6">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-left">Task Name</label>
                <input 
                    className="w-full p-2 border border-gray-300 rounded"
                    ref={taskNameRef}
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskname(e.target.value)}
                    required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-left">Description</label>
                <textarea 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-left">Category</label>
                <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    {categories.map((cat, idx)=> (
                        <option key={idx} value={cat}>
                            {cat}
                        </option>
                    ))}
                    </select>
            </div>
            <div className="mb-4">
                <label className="text-left block text-gray-700 mb-2">Due Date</label>
                <input 
                    className="w-full p-2 border border-gray-300 rounded"
                    type="date"
                    value={dueDate}
                    onChange={(e)=> setDueDate(e.target.value)} />    
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Task</button>
            <ToastContainer />
        </form>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.object.isRequired
}

export default TaskForm;