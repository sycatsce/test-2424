import React from 'react';
import '../../../assets/style/App.css'
import SignIn from '../components/SignIn';

function Home() {
  return (
    <div className="container">
        <div className="left-block">
            <div className="left-title"> Dimtech </div>
            <div className="left-text">
              <p className="left-subtitle"> Hi, <br/> Welcome on Dimtech </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit.
              </p>
            </div>
        </div>
        <div className="right-block">
            <SignIn/>
        </div>
    </div>
  );
}

export default Home;
