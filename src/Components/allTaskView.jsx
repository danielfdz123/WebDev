import React, { useState } from 'react';
import './allTaskView.css';

// Modal used for SINGLE task VIEW (shows task title, description, and assigned players)
const Modal = ({ isOpen, onClose, task }) => {
  if (!isOpen) return null;

  return (
    <div className="singTaskView">
      <div className="taskDetails">
        <h1>{task.title}</h1>
        <p><u>About</u>: {task.description}</p>
        <p>The following players are working on this task:</p>
        <ul>
          <li>
            {task.player}
          </li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const AllTaskBox = ({ tasks, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTask(null);
  };

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
              <span className="title" onClick={() => openModal(task)}>
                <b> • {task.title} </b>
              </span>
              <span className='player'> ({task.player}) </span>
              <button onClick={() => deleteTask(index)}>X</button>
            </div>
            <p>{task.description}</p>
          </div>
        ))
      )}
      <Modal isOpen={modalOpen} onClose={closeModal} task={selectedTask} />
    </div>
  );
};

export default AllTaskBox;