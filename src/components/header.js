import React, { Component } from 'react';
import './header.css';
import Logo from "../assests/icons/dice.png";
var accountsArray

var loggedIn;
function loadData() {
  loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  accountsArray = JSON.parse(localStorage.getItem('accounts'))
  console.log(accountsArray)
}

function showLogin() {
  var feilds = document.getElementById("loginFeilds");
  var showLink = document.getElementById("showLoginFeilds");
  var link = document.getElementById("loginLink");
  feilds.style.display = "flex";
  showLink.style.display = "none";
  link.style.display = 'flex';

}

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLoginClick() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var loginSucseful = false;
    for (var i = 0; i < accountsArray.accounts.length; i++) {
      if (accountsArray.accounts[i].email === email && accountsArray.accounts[i].password === pass) {

        console.log('work')
        loggedIn = accountsArray.accounts[i];
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
        loginSucseful = true;
        window.location.href = '/play';


      }




    }
    if (!loginSucseful) {
      alert('incorect email or password!');
      return false;
    }
  }

  handleLogoutClick() {
    loggedIn = null;
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));

  }


  render() {
    var loginSec;

    loadData()
    if (loggedIn === null | loggedIn === undefined) {
      loginSec =
        <div className="login">
          <ul>
            <li>
              <p onClick={showLogin} id="showLoginFeilds" >Log in to Play</p>
            </li>
            <div id="loginFeilds">
              <li>
                <p onClick={this.handleLoginClick} id="loginLink" >Log in</p>
              </li>

              <li>
                <input type="text" id="email" placeholder="Email:" />
              </li>
              <li>
                <input type="password" id="password" placeholder="Password:" />
              </li>
            </div>
          </ul>
        </div>;
    }
    else if (loggedIn !== null | loggedIn !== undefined) {
      loginSec = <div className="logout" >
        <li>
          <p>Logged in as {loggedIn.firstName}.</p>
        </li>
        <li>
          <a onClick={this.handleLogoutClick} href="/" className="logOutLink">Log Out</a>
        </li>

      </div >;
    }

    return (

      <header>
        <div className="headContainer">
          <div className="webLogo">
            <img src={Logo} alt="website logo" />

          </div>
          <div className="webName">
            CIT GAMES
          </div>
          {loginSec}
        </div>
      </header >
    )
  }
}