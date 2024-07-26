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
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask('');
      localStorage.setItem('todayTasks', JSON.stringify(updatedTasks));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="h-auto flex flex-col justify-center items-center bg-cover bg-center p-4 rounded-lg bg-[#304050] bg-opacity-75">
      <h2 className="text-[#E2E2B6] text-2xl font-bold mb-4">What did I do today?</h2>
      <ul className="w-full list-disc list-inside mb-4">
        {tasks.map((task, index) => (
          <li key={index} className="text-[#E2E2B6] text-lg">{task}</li>
        ))}
      </ul>
      <div className="w-full flex space-x-2">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className="flex-grow bg-transparent text-[#E2E2B6] placeholder-[#E2E2B6] py-1 px-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#E2E2B6] focus:ring-opacity-50"
        />
        <button
          onClick={addTask}
          className="font-bold text-sm py-1.5 px-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#E2E2B6] focus:ring-opacity-50 border border-[#E2E2B6] text-[#E2E2B6] hover:bg-[#E2E2B6] hover:text-black"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodayTasksWidget;
