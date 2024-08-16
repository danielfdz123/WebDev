import React from 'react';
import { Link } from 'react-router-dom';
import './allTaskView.css';

const AllTaskBox = ({ tasks, onDelete }) => {
  const deleteTask = (index) => {
    onDelete(index);
  };

  return (
    <div className="taskBox">
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={task.id} className="card">
            <div className="horizontal">
              <span> • </span>
              <Link to={`/tasks/${task.title}`} className="taskLink">
                <b>{task.title}</b>
              </Link>
              <span className='player'> ({task.player}) </span>
              <button onClick={() => deleteTask(index)}>X</button>
            </div>
            <p>{task.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTaskBox;
