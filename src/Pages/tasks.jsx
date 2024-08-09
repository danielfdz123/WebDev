import React, { useState } from 'react';
import '../App.css';
import './tasks.css';
import AllTaskBox from '../Components/allTaskView'; // Adjust the import based on your file structure

export function Tasks() {
  const [task, setTask] = useState([
    {id: 1, title: 'Community Area', description: 'Located on a central island that will hold everything such as community storage, enchanting rooms, along with other buildings and spots that will make the place very cozy!' },
    {id: 2, title: 'Nether Tunnels', description: "Using a boat and some ice, these tunnels will connect everything this server has to offer! From people's homes, to farms, you can go anywhere!"},
    {id: 3, title: 'Castle Expansion', description: "Just simply going to make the castle look cool and better" },
  ]);

  const addTask = () => {
  const title = window.prompt("Enter Task Name:")
  const description = window.prompt ("Enter Task Description")

  /* Checks if a username and role has been entered, otherwise display an alert message */
    if (title && description) {
      const newTask = {id: task.length + 1, title, description};
      setTask([...task, newTask]);
    } 
    else {
      alert("Both Username and Role type are required.");
    }
  };
  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
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
          <AllTaskBox task={task} onDelete={deleteTask} />
        </div>
      </div>
    </>
  );
}

export default Tasks;
