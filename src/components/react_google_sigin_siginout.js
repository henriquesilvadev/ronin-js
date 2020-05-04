import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';



const CLIENT_ID = '1007518564481-5qqf4mqfkivocdgdt7mrmbhn35tlrpa8.apps.googleusercontent.com';

class GoogleBtn extends Component {


  constructor(props) {

    super(props);

    this.state = {
      isLogined: false,
      accessToken: 'H8LYT9JJTn98GL5_1lczb2XQ'
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.Zi.access_token){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.Zi.access_token
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />

      { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }

    </div>
    )
  }
}

export default GoogleBtn;
