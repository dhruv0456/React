import React, { useState } from 'react';


export default function Task() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState('low');
    const [filter, setFilter] = useState('all');

    const handleAddTask = () => {
        if (taskName.trim() === '' || taskDescription.trim() === '') return;

        const newTask = {
            id: Date.now(),
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTaskName('');
        setTaskDescription('');
        setTaskPriority('low');
    };



    const handleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: true } : task
        ));
    };



    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };


    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });



    return (
        <div className="container">
            <h1>Task Manager</h1>
            <div className="welcome-message">Welcome</div>

            <div className="task-input-section">
                <input
                    type="text"
                    value={taskName}
                    placeholder="Task Name"
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <input
                    type="text"
                    value={taskDescription}
                    placeholder="Description"
                    onChange={(e) => setTaskDescription(e.target.value)}
                />

                <select
                    value={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button onClick={handleAddTask}>Submit</button>
            </div>


            <div className="task-filter-section">
                <label htmlFor="filterTasks">Filter by:</label>
                <select
                    id="filterTasks"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>



            <div className="task-card-list">

                {filteredTasks.map((task, index) => (

                    <div className="task-card" key={task.id}>
                        <h3>{index + 1}. {task.name}</h3>
                        <p><strong>Description:</strong> {task.description}</p>
                        <p><strong>Priority:</strong> {task.priority}</p>
                        <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}</p>

                        <div className="task-actions">
                            <button className="action-button delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
                            {!task.completed && (
                            <button className="action-button complete-button" onClick={() => handleComplete(task.id)}>Complete</button>
                            )}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}
