import React from 'react';
import {ReactComponent as MuteLabsIcon} from '../../Images/Mutelabs_Icon_Pink.svg'

export function Navbar(props) {
    return (
      <nav className="navbar">
        <MuteLabsIcon className="MuteLabsIcon"/>
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }