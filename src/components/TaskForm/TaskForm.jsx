import { useContext, useState } from "react";
import { CategoryContext } from "../../utilities/CategoryContext";

const TaskForm = ({addTask}) => {
    const [taskName, setTaskname] = useState("");
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const {categories} = useContext(CategoryContext)

    const handleSubmit = e => {
        e.preventDefault()
        if(taskName === "") return;
        addTask({taskName, description, category})
        setTaskname("")
        setDescription("")
        setCategory("")

    }


    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md mb-6">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Task Name</label>
                <input 
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskname(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Category</label>
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
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Task</button>
        </form>
    );
};

export default TaskForm;