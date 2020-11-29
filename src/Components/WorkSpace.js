import React, { useEffect, useState} from 'react';
import {Navbar} from './Nav/Navbar';
import {NavItem} from './Nav/NavItem';
import DropdownMenu from './Nav/DropdownMenu.js';
import {ReactComponent as BellIcon} from '../icons/bell.svg'
import {ReactComponent as SettingsIcon} from '../icons/settings.svg'
import {ReactComponent as MessageIcon} from '../icons/message-circle.svg'

export function WorkSpace(){


    

    return (
    <div>
        <Navbar>
            <NavItem icon={<MessageIcon/>}/>
            <NavItem icon={<BellIcon/>}/>
            <NavItem icon={<SettingsIcon/>}>
                <DropdownMenu/>
            </NavItem>
        </Navbar>
         
    </div>
    );
}


  

  
  