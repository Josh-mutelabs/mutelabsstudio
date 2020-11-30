import React, { useEffect, useState} from 'react';
import {ReactComponent as LeftArrow} from '../../icons/arrow-left.svg';


export function JoinProject(props){

    return (
    <div className="NewProject">
        <input type="text" placeholder="Project ID"/>
        <LeftArrow/>
         {props.currentState}
         <span onClick={()=>{props.value(false)}}>Back</span>{props.value}
    </div>
    );
}


  

  
  