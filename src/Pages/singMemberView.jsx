import React from 'react';
import '../App.css';
import './singMemberView.css';
import { useParams } from 'react-router-dom';

export function SingleMember() {
  const { username } = useParams();

  const tasks = [
    'Complete the project proposal',
    'Review the design mockups',
    'Prepare the budget report',
  ];

  return (
    <div className = "background">
      <div className = "singMemberView">
        <h1 className = "name"> <u> {username}: </u> </h1>
        <div className = "taskList">
          <h4>          
            <ul>
              {/* Members role followed by a list of their tasks goes here */}
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SingleMember;