import React, { useEffect, useState} from 'react';
import {NewProject} from './Project/NewProject';
import {JoinProject} from './Project/JoinProject';
import {CardButton} from './Global/CardButton';
import {ReactComponent as MusicIcon} from '../icons/music.svg';
import {ReactComponent as AddUser} from '../icons/user-plus.svg';



export function WorkSpace(){

    const [newProject, setNewProject] = useState(false)
    const [joinProject, setJoinProject] = useState(false)

    return (
    <div className="workspace">
        {!newProject&& !joinProject && (
            <div className="noProjects-container">
                <span className="noProjects-label">No Projects</span>
                <div className="Card-button-container">
                    <CardButton icon={<MusicIcon/>} title="New project" onClick={()=>setNewProject(true)}/>
                    <CardButton icon={<AddUser/>} title="Join project" onClick={()=>setJoinProject(true)}/>
                </div>
            </div>
            
        )}
        
            {newProject&& <NewProject currentState={newProject} value={()=>setNewProject()}/>}
            {joinProject && <JoinProject currentState={newProject} value={()=>setJoinProject()}/>}  
         
    </div>
    );
}


  

  
  