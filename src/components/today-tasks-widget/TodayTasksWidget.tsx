import React, { useState, useEffect } from 'react';

const TodayTasksWidget: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const storedDate = localStorage.getItem('tasksDate');
    const storedTasks = localStorage.getItem('todayTasks');
    
    if (storedDate === date && storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      localStorage.setItem('tasksDate', date);
      localStorage.setItem('todayTasks', JSON.stringify([]));
    }
  }, [date]);

  const addTask = () => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTask('');
    localStorage.setItem('todayTasks', JSON.stringify(updatedTasks));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">What did I do today?</h2>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          className="border rounded p-2 flex-grow"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="ml-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodayTasksWidget;
