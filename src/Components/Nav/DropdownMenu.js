import React, { useState, useEffect, useRef } from 'react';
import {CSSTransition} from 'react-transition-group';
import {Dropdownlogout} from './Dropdownlogout';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg'
import {ReactComponent as MessageIcon} from '../../icons/message-circle.svg'
import {ReactComponent as LeftArrow} from '../../icons/arrow-left.svg'
import {ReactComponent as ChevronRight} from '../../icons/chevron-right.svg'
import {ReactComponent as LogoutIcon} from '../../icons/log-out.svg' 
 function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    
    const [checked, setCheck] = useState(true);
    const bg = '--bg';
    const accent = "--bg-accent";
    const textColor = "--text-color";
    const border = "--border";
    const hover = "--hover";
    const appbg = "--app";

    useEffect(()=>{
        if(checked){
            
        document.documentElement.style.setProperty(bg, '#242526');
        document.documentElement.style.setProperty(accent, '#484a4d');
        document.documentElement.style.setProperty(textColor, '#dadce1');
        document.documentElement.style.setProperty(border, '1px solid #474a4d');
        document.documentElement.style.setProperty(hover,"#525357");
        document.documentElement.style.setProperty(appbg,"#272728");


            
        }else{
            document.documentElement.style.setProperty(bg, '#FCFCFC');
            document.documentElement.style.setProperty(accent, '#BEBEBE');
            document.documentElement.style.setProperty(textColor, '#333333');
            document.documentElement.style.setProperty(border, '1px solid #BEBEBE');
            document.documentElement.style.setProperty(hover,"#E4E4E4");
            document.documentElement.style.setProperty(appbg,"#FCFCFC");
        }
    },[checked])
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<SettingsIcon />}
              rightIcon={<ChevronRight />}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <Dropdownlogout
              leftIcon={<LogoutIcon/>}
              onClick={()=> {console.log('log out')}}>
              Log out
            </Dropdownlogout>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<LeftArrow />}>
              <h2>My Tutorial</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<MessageIcon />} rightIcon={<input type="radio" defaultChecked checked={checked} onClick={() => setCheck(!checked)}/>}>Dark mode</DropdownItem>
            <DropdownItem leftIcon={<MessageIcon />}>CSS</DropdownItem>
            <DropdownItem leftIcon={<MessageIcon />}>JavaScript</DropdownItem>
            <DropdownItem leftIcon={<MessageIcon />}>Awesome!</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  export default DropdownMenu;