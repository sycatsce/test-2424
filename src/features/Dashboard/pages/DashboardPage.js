import React, { Component } from 'react';
import { connect } from 'react-redux';



class DashboardPage extends Component {

  render(){
    return (
      <div className="App">
        <h1> Dashboard </h1>
        <p> Hello {this.props.loggedAs} </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		loggedAs: state.loginReducer.loggedAs
	}
}

export default connect(mapStateToProps)(DashboardPage);