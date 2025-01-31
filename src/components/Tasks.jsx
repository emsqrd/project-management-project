import { useState } from 'react';

export default function Tasks({ projectId }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  function handleAddTaskClick() {
    if (taskInput.trim() === '') return;

    const newTask = {
      id: Math.random(),
      projectId: projectId,
      title: taskInput,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskInput('');
  }

  function handleClearTaskClick(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  const projectTasks = tasks.filter((task) => task.projectId === projectId);

  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex gap-4">
        <input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button onClick={handleAddTaskClick}>Add Task</button>
      </div>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {projectTasks.length === 0 && <p className="text-stone-800">This project does not have any tasks yet.</p>}
        {projectTasks.map((task) => (
          <li key={task.id} className="flex justify-between my-4">
            <p className="text-stone-800">{task.title}</p>
            <button className="text-stone-700 hover:text-red-500" onClick={() => handleClearTaskClick(task.id)}>
              Clear
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
