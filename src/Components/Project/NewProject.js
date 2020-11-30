import React, { useEffect, useState} from 'react';


export function NewProject(props){

    return (
    <div className="NewProject">
         New Project
         {props.currentState}
         <span onClick={()=>{props.value(false)}}>cancel</span>{props.value}
    </div>
    );
}


  

  
  