import React, { useEffect, useState} from 'react';


export function CardButton(props){

    return (
        <div className="Card-button border-gradient-purple" onClick={()=>{props.onClick(false)}}>
            {props.icon}
            <span >{props.title}</span>
        </div>
    );
}


  

  
  