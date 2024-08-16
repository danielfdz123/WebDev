import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import './singTaskView.css';

export function SingleTask({ tasks }) {
  const { title } = useParams();

  return (
    <div className="background">   
        <div className="singTaskView">
            <h1 className="name"><u>{title}:</u></h1>
            <div className="taskDetails">
                <h4>
                    <ul>
                        {/* <li><b>Description:</b> {task.description}</li>
                        <li><b>Responsible:</b> {task.player}</li> */}
                    </ul>
                </h4>
            </div>
        </div>
    </div>
  );
}

export default SingleTask;
