import React, { Component } from 'react';
import './land.css';
import Img from "../../assests/images/rps.png"
import PlayComponent from './play';

var loggedIn = { firstName: 'not logged' }
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}


export default class LandComponent extends Component {
    render() {

        loadLogged()
        if (loggedIn === null) {

            return (<div className='main'>

                <div id="rpsImg">
                    <img src={Img} alt="" />
                </div>
                <div className="paragraphs">
                    <div className="paragraph">
                        <h3>Sign Up</h3>
                        <p>Sign up for a free account using your email address.</p>
                    </div>
                    <div className="paragraph">
                        <h3>Play</h3>
                        <p>Play Rock Paper Scissors versus the compueter.</p>
                    </div>
                    <div className="paragraph">
                        <h3>Win</h3>
                        <p>A player wins if they beat the computer more than they lose in 10 rounds</p>
                    </div>

                    <div className="buttonContainer">
                        <a href="signup" className="bigButton">Sign Up</a>
                    </div>
                </div>
            </div>
            )
        }
        else {
            return (
                <PlayComponent />
            )
        }
    }
}