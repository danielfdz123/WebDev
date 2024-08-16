import React, { useState } from 'react';
import '../App.css';
import './members.css';
import MembersBox from '../Components/memberView';

export function Members() {
  const [members, setMembers] = useState([
    { id: 1, username: 'BKOakleys', role: 'Server Owner' },
    { id: 2, username: 'Blorgus', role: 'Member' },
    { id: 3, username: 'LexLoser', role: 'Member' },
    { id: 4, username: 'MadamSatan', role: 'Member' },
    { id: 5, username: 'Serelioexe', role: 'Member' },
    { id: 6, username: 'Spooderstar', role: 'Member' },
  ]);

    const addMember = () => {
    const username = window.prompt("Enter username:");
    const role = window.prompt("Enter role:");

/* Checks if a username and role has been entered, otherwise display an alert message */
    if (username && role) {
      const newMember = {id: members.length + 1, username, role};
      setMembers([...members, newMember]);
    } 
    else {
      alert("Both Username and Role type are required.");
    }
  };

  const deleteMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="MembersPage">
        <h1 className="membersTitle">Meet the Members!</h1>
        <div className="membersAboutBox">
          <b>
            Below, you will see a lineup for <i>"<u>The Hangout</u>"</i> Minecraft server! Each member has their own username displayed along with their role in the server.
            <br /> <br />
            Hit the <i>ADD MEMBER</i> button below to join us!
          </b>
        </div>
        <button id="add" onClick={addMember}>ADD MEMBER</button>
        <div className="allMembers">
          <MembersBox members={members} onDelete={deleteMember} />
        </div>
      </div>
    </>
  );
}

export default Members;