import React, { useEffect, useState} from 'react';
import {NewProject} from './Project/NewProject';


export function WorkSpace(){

    const [newProject, setNewProject] = useState(false)

    return (
    <div className="workspace">
        {!newProject&& (
            <div className="noProjects-container">
                <span className="noProjects-label">No Projects</span>
                <span onClick={()=> setNewProject(true)}>Start a project +</span>
            </div>
            
        )}
        
            {newProject&& <NewProject currentState={newProject} value={()=>setNewProject()}/>} 
         
    </div>
    );
}


  

  
  