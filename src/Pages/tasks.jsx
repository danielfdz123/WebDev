import React, { useState } from 'react';
import '../App.css';
import './tasks.css';
import AllTaskBox from '../Components/allTaskView';

export function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Community Area', player: 'BKOakleys', description: 'Located on a central island...' },
    { id: 2, title: 'Nether Tunnels', player: 'Blorgus', description: 'Using a boat and some ice...' },
    { id: 3, title: 'Castle Expansion', player: 'Blorgus, BKOakleys', description: 'Just simply going to...' },
  ]);

  const addTask = () => {
    const title = window.prompt("Enter Task Name:");
    const description = window.prompt("Enter Task Description");
    const player = window.prompt("Enter who is responsible for this task: ");

    if (title && description && player) {
      const newTask = { id: tasks.length + 1, title, player, description };
      setTasks([...tasks, newTask]);
    } else {
      alert("ERROR: Please fill out all 3 prompts to add a task!");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="TaskPage">
        <h1 className="pageTitle">Our Goals!</h1>
        <div className="aboutBox">
          <b>
            Below, you will see a list of tasks that the task of <i>"<u>The Hangout</u>"</i> Minecraft server are currently working on! 
            Click on a task to see which player, or players are responsible for said task!
            <br /> <br />
            Have a new project idea? Hit the <i>ADD TASK</i> button below to add to the list!
          </b>
        </div>
        <button id="add" onClick={addTask}>ADD TASK</button>
        <div className="allTasks">
          <AllTaskBox tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    </>
  );
}

export default Tasks;