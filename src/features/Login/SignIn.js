import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as api from '../../api/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction as login } from './actions';


class Login extends Component {
  constructor() {
    super();
    this.state = {email: 'michael.lawson@reqres.in', password: 'password'}
  }

  onSubmit = (e) => {
    e.preventDefault();
    api.login(this.refs.emailInput.value, this.refs.passwordInput.value).then( (token) => {
      this.props.actions.login(this.refs.emailInput.value);
    });
  }

  render(){
    return (
      <div className="App">
        <h2> Sign In </h2>
        {this.props.loggedAs}
        <form onSubmit={(e) => {this.onSubmit(e)}}>
          <input
            ref='emailInput'
            type='text'
            onChange={(e) => { this.setState({ email: e.target.value }) }}
            value={this.state.email}
            placeholder='Email' />
          <br/>
          <input
            ref='passwordInput'
            type='password'
            onChange={(e) => { this.setState({ password: e.target.value }) }}
            value={this.state.password}
            placeholder='Password' />
          <br/>
          <button> Login </button>
        </form>
        <Link to="/password-forgotten"><p> PasswordForgotten </p></Link> 
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