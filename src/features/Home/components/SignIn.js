import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import * as api from '../../../api/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction as login } from '../redux/actions';


class Login extends Component {
  constructor() {
    super();
    this.state = {email: 'michael.lawson@reqres.in', password: 'password', redirectToDashboard: false}
  }

  onSubmit = (e) => {
    e.preventDefault();
    api.login(this.refs.emailInput.value, this.refs.passwordInput.value).then( (res) => {
      if(res.token){
        this.props.actions.login(this.refs.emailInput.value);
        this.setState({ redirectToDashboard: true });
      }
      else{
        console.log('Incorrect email');
      }
    });
  }

  render(){
    let { redirectToDashboard } = this.state;
    if (redirectToDashboard) return <Redirect to={{ pathname: "/dashboard" }} />;
    
    return (
      <div className="signin-block">
        <h2> Sign In </h2>
        <form onSubmit={(e) => {this.onSubmit(e)}}>
          <input
            className="form-input"
            ref='emailInput'
            type='text'
            onChange={(e) => { this.setState({ email: e.target.value }) }}
            value={this.state.email}
            placeholder='Email' />
          <br/>
          <input
            className="form-input"
            ref='passwordInput'
            type='password'
            onChange={(e) => { this.setState({ password: e.target.value }) }}
            value={this.state.password}
            placeholder='Password' />
          <br/>

          <div>
            <input type="checkbox" id="keep-logged" />
            <label for="keep-logged"> Keep me logged </label>
            <a href='/password-forgotten' style={{ color: 'white', marginLeft: '10px' }}> Forgot your password ?</a><br/>
          </div>

          <button class="custom-button"> Login </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		loggedAs: state.loginReducer.loggedAs
	}
}


const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ login }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);