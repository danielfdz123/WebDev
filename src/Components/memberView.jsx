import React, { useState } from 'react';
import './memberView.css';

//Modal used for SINGLE MEMBER VIEW (shows username, server role, and their tasks)
const Modal = ({ isOpen, onClose, member }) => {
  if (!isOpen) return null;

  return (
    <div className="singMemberView">
      <div className="memberDetails">
        <h1> {member.username} </h1>
        <p> <u> Role</u>: {member.role}</p>
        <p> This player is working on: </p>
        <ul>
          <li> Community Area </li>
          <li> Nether Tunnels </li>
          <li> Task 3 </li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const MembersBox = ({ members, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMember(null);
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="memberBox">
      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        members.map((member, index) => (
          <div key={member.id} className="card">
            <div className="horizontal">
              <span> {index + 1}. </span>
              <span className="username" onClick={() => openModal(member)}>
                <b>{member.username}</b>
              </span>
              <button onClick={() => handleDelete(index)}>X</button>
            </div>
            <p>{member.role}</p>
          </div>
        ))
      )}
      <Modal isOpen={modalOpen} onClose={closeModal} member={selectedMember} />
    </div>
  );
};

export default MembersBox;