import React, { Component } from 'react';
import './signup.css';

var accObj
function loadAcc() {

    accObj = JSON.parse(localStorage.getItem('accounts'))



}



export default class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);

    }
    handleSignUpClick() {
        var firstName = document.getElementById('fName').value;
        var lName = document.getElementById('lName').value;
        var email = document.getElementById('newEmail').value;
        var pass = document.getElementById('psw').value;
        var passRepeat = document.getElementById('pswRepeat').value;
        if (firstName === '' | lName === '' | email === '' | pass === '' | passRepeat === '')
            alert('Please fill out form!')
        else if (pass !== passRepeat)
            alert('Passwords do not match!')
        else {
            console.log(accObj)
            accObj['accounts'].push({ "email": email, "firstName": firstName, "lastName": lName, "password": pass })
            console.log(accObj)
            var loggInAccc = { email: email, password: pass, firstName: firstName, lastName: lName }
            localStorage.setItem('accounts', JSON.stringify(accObj));
            localStorage.setItem('loggedIn', JSON.stringify(loggInAccc));
            window.location.href = '/play';

        }
    }




    render() {
        loadAcc()
        return (
            <div className='main signUpForum'>

                <h1>Sign Up</h1>

                <label ><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" id="fName" />

                <label ><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" id="lName" />

                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" id="newEmail" />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw" />

                <label><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" id="pswRepeat" />
                <p onClick={this.handleSignUpClick} className="signupbtn">Sign Up</p>
                <a href="/" className="signupbtn">Cancel</a>

            </div>


        )

    }
}