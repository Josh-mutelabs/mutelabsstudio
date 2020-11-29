import { Auth } from 'aws-amplify';
import React from 'react';

export function Dropdownlogout(props){
    return(
        <a href="#" className="menu-item" onClick={()=> Auth.signOut()} >
              <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
    </a>
    )
}