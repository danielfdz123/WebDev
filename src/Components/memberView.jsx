import React from 'react';
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
        members.map((members, index) => (
          <div key={members.id} className="card">
            <h5>{index + 1}. {members.username}
              <button onClick={() => deleteMember(index)}>X</button>
            </h5>
            <p>{members.role} </p>
          </div>
        ))
      )}
    </div>
  );
};

export default MembersBox;