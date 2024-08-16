import React from 'react';
import { Link } from 'react-router-dom';
import './memberView.css';

const MembersBox = ({ members, onDelete }) => {
  const deleteMember = (index) => {
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
              <Link to={`/members/${member.username}`} className="username">
                <b>{member.username}</b>
              </Link>
              <button onClick={() => deleteMember(index)}>X</button>
            </div>
            <p>{member.role}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MembersBox;