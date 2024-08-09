import React from 'react';
import './allTaskView.css';

const AllTaskBox = ({ task, onDelete }) => {

  const deleteTask = (index) => {
    onDelete(index);
  };

  return (
    <div className="taskBox">
      {task.length === 0 ? (
        <p>No task found.</p>
      ) : (
        task.map((task, index) => (
          <div key={task.id} className="card">
            <h5>• {task.title} 
              <button onClick={() => deleteTask(index)}>X</button>
            </h5>
            <p>{task.description} </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTaskBox;