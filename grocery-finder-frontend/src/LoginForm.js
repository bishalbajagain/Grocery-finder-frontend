import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';

import { withRouter } from 'react-router';



class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonDisabled: false      
    }
  }
setInputValue (property ,val){
  val = val.trim();
  if(val.length > 12){
    return;
  }
  this.setState({
    [property] : val
  })
}

async doSignUp(){
  console.log("we are in doSignUp");
  if(!this.state.username){
    return;
  }
  if(!this.state.password){
    return;
  }
  this.setState({
    buttonDisabled: true
  })

  try{
    let res = await fetch("http://localhost:8000/api/user/signup",{
      method: "post",
      mode: 'cors',
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })

    });
    let result = await res.json();

    if(result.status === 409){
      alert(result.message);
      return;
    }
    if(result && result.success){
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
      return (
        <div className="app">
          <div className="container">
            Welcome {UserStore.userName}
            <SubmitButton
              text={"Logout"}
              disabled={false}
              onClick={() => this.doLogout()}
            />
          </div>
        </div>);
    }
    
    else if(result.success === false){
      
      alert(result.message);
      this.resetForm();
     

    }

  }
  catch(e){
    console.log(e);
    this.resetForm();

   
  }

}

async doLogin(){
  console.log("we are in doLogin");
  if(!this.state.username){
    return;
  }
  if(!this.state.password){
    return;
  }
  this.setState({
    buttonDisabled: true
  })

  try{
    let res = await fetch("/login",{
      method: "post",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })

    });
    let result = await res.json();
    if(result && result.success){
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
    }
    else if(result && result.success === false){
      this.resetForm();
      alert(result.msg);

    }

  }
  catch(e){
    console.log(e);
    this.resetForm();

   
  }

}

handlertoMainPage = () => {
  this.props.history.push('/recipe-catagory')
}

resetForm(){
  this.setState({
      username: "",
      password: "",
      buttonDisabled: false
  })
}
  render(){
  return (
    <div className="loginForm">
      <h2>Sign In / Sign Up</h2>
      <InputField
      type = 'text'
      placeholder= 'Username'
      value= {this.state.username? this.state.username :  ''}
      onChange = {(val) => this.setInputValue('username',val)}
      />

<InputField
      type = 'password'
      placeholder= 'Password'
      value= {this.state.password? this.state.password :  ''}
      onChange = {(val) => this.setInputValue('password',val)}
      />

      <SubmitButton
         text = 'Sign In'
         disabled = {this.state.buttonDisabled}
         onClick = {()=>{this.doLogin();this.handlertoMainPage()}}
      />
      <SubmitButton
         text = 'Sign Up'
         disabled = {this.state.buttonDisabled}
         onClick = {()=>{this.doSignUp(); this.handlertoMainPage()}}
      />
     
    </div>

    
  );
}
}

export default withRouter(LoginForm);
