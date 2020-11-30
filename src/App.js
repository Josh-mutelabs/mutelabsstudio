import React, {useState, useEffect } from 'react';
import {Auth, Hub } from 'aws-amplify';
import { userContext } from './utils/userContext';
import { WorkSpace } from './Components/WorkSpace';
import {Navbar} from './Components/Nav/Navbar';
import {NavItem} from './Components/Nav/NavItem';
import DropdownMenu from './Components/Nav/DropdownMenu.js';
import {ReactComponent as BellIcon} from './icons/bell.svg'
import {ReactComponent as SettingsIcon} from './icons/settings.svg'
import {ReactComponent as MessageIcon} from './icons/message-circle.svg'


const initalFormState = {
   username:'', password:'', email:'', authCode:'', formType:'signUp', given_name:'', 
}

function App()  {
   const [formState, updateFormState] = useState(initalFormState)
   const [user, updateUser] = useState(null)
   const {formType} = formState

   useEffect(()=>{
    checkUser()
    setAuthListener()
   }, [])

   async function setAuthListener(){
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signOut':
          console.log('data from event: ', data)
          updateFormState(()=>({ ...formState, formType:'signIn'}))
            break;
        default:
          break
      }
    });
   }
   async function checkUser(){
     try{
      const user = await Auth.currentAuthenticatedUser()
      console.log('user:', user);
      updateUser(user)
      updateFormState(()=>({ ...formState, formType:'signedIn'}))
     } catch (err){
        //updateUser(null)
     }
   }
   function onChange(e){
     e.persist()
     updateFormState(()=>({ ...formState, [e.target.name]:e.target.value}))
   }
   async function signUp(){
     const { username,email, password} = formState
     await Auth.signUp({username, password, attributes:{email, given_name:"Josh"}})
     updateFormState(()=>({ ...formState, formType:'confirmSignUp'}))
   }
   async function ConfirmSignUp(){
    const { email, authCode} = formState
    await Auth.confirmSignUp(email, authCode)
    updateFormState(()=>({ ...formState, formType:'signIn'}))
   }
   async function signIn(){
    const { username, password} = formState
    await Auth.signIn(username, password)
    updateFormState(()=>({ ...formState, formType:'signedIn'}))
   }
  return (
    <div className='App'>
      <userContext.Provider value="Hello from context">
          {
            formType === 'signUp' && (
              <div>
                <input name='username' onChange={onChange} placeholder='Email' />
                <input name='email' onChange={onChange} placeholder='confirm Email' />
                <input name='password' type='password' onChange={onChange} placeholder='Password' />
                <button onClick={signUp}>Sign Up</button>
                <button onClick={()=>updateFormState(()=>({
                  ...formState, formType: "signIn"
                }))}>Sign In</button>
                </div>
            )
          }
          {
            formType === 'signIn' && (
              <div>
                <input name='username' onChange={onChange} placeholder='email' />
                <input name='password' type='password' onChange={onChange} placeholder='Password' />
                <button onClick={signIn}>Sign In</button>
                </div>
            )
          }
          {
            formType === 'confirmSignUp' && (
              <div>
                <input name='authCode' onChange={onChange} placeholder='Confirmation Code' />
                <button onClick={ConfirmSignUp}>Confirm Sign Up</button>
                </div>
            )
          }
           {
            formType === 'signedIn' && (
              <div className="globalContainer">
                <Navbar>
            <span className="currentUser" >{user.attributes.given_name}</span>
                  <NavItem icon={<MessageIcon/>}/>
                  <NavItem icon={<BellIcon/>}/>
                  <NavItem icon={<SettingsIcon/>}>
                    <DropdownMenu/>
                  </NavItem>
                </Navbar>
                <WorkSpace/>
                </div>
            )
          }
          </userContext.Provider>
    </div>
  );
};
export default App;