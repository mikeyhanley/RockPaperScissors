import React, { Component } from 'react';
import './play.css';
import LandComponent from './land';
import blankPic from '../../assests/images/Blank.png'
import rockPic from '../../assests/images/rock.png'
import rockPicSecelected from '../../assests/images/rockSelected.png'
import paperPicSecelected from '../../assests/images/paperSelected.png'
import scissorsPicSecelected from '../../assests/images/scissorsSelected.png'
import paperPic from '../../assests/images/paper.png'
import scissorsPic from '../../assests/images/scissors.png'

var loggedIn;
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}
var playerChoice;
var cpuChoice;

var paperChoice
var scissorsChoice
var rockChoice;
var cpuPaperChoice
var cpuScissorsChoice
var cpuRockChoice;
var playerBlank;
var cpuBlank;
var winner;
function setChoices() {
    paperChoice = document.getElementById('paperChoice')
    scissorsChoice = document.getElementById('scissorsChoice')
    rockChoice = document.getElementById('rockChoice')
    cpuScissorsChoice = document.getElementById('cpuScissorsChoice')
    cpuRockChoice = document.getElementById('cpuRockChoice')
    cpuPaperChoice = document.getElementById('cpuPaperChoice')
    playerBlank = document.getElementById('player')
    cpuBlank = document.getElementById('cpu')
}
function handleRockClick() {
    setChoices();
    scissorsChoice.setAttribute('src', scissorsPic)

    paperChoice.setAttribute('src', paperPic)


    rockChoice.setAttribute('src', rockPicSecelected)

    playerBlank.setAttribute('src', rockPic)
    playerChoice = 'rock'
}

function handlePaperClick() {
    setChoices();


    scissorsChoice.setAttribute('src', scissorsPic)

    rockChoice.setAttribute('src', rockPic)

    paperChoice.setAttribute('src', paperPicSecelected)
    playerBlank.setAttribute('src', paperPic);
    playerChoice = 'paper';

}

function handleScissorsClick() {
    setChoices();

    paperChoice.setAttribute('src', paperPic)

    rockChoice.setAttribute('src', rockPic)

    scissorsChoice.setAttribute('src', scissorsPicSecelected)

    playerBlank.setAttribute('src', scissorsPic);
    playerChoice = 'scissors';
}
export default class PlayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { playerWins: 0, cpuWins: 0, draws: 0 };

        this.handlePlayClick = this.handlePlayClick.bind(this);
        this.handleGame = this.handleGame.bind(this);
        this.reset = this.reset.bind(this);
    }
    reset() {
        this.setState({ playerWins: 0, cpuWins: 0, draws: 0 });
        document.getElementById('playButton').style.display = 'block';
        document.getElementById('resetButton').style.display = 'none';
        paperChoice.setAttribute('src', paperPic)
        scissorsChoice.setAttribute('src', scissorsPic)
        rockChoice.setAttribute('src', rockPic)
        cpuPaperChoice.setAttribute('src', paperPic)
        cpuScissorsChoice.setAttribute('src', scissorsPic)
        cpuRockChoice.setAttribute('src', rockPic);

        playerBlank.setAttribute('src', blankPic)
        cpuBlank.setAttribute('src', blankPic)
        winner = '';
        playerChoice = undefined;
        cpuChoice = undefined;

    }
    handleGame() {
        var newWinValue = this.state.playerWins;
        var newWinValueCpu = this.state.cpuWins;
        var drawCount = this.state.draws
        if (playerChoice === 'rock' && cpuChoice === 'scissors')
            newWinValue++;
        else if (playerChoice === 'paper' && cpuChoice === 'rock')
            newWinValue++;
        else if (playerChoice === 'scissors' && cpuChoice === 'paper')
            newWinValue++;

        else if (playerChoice === 'scissors' && cpuChoice === 'rock')
            newWinValueCpu++;
        else if (playerChoice === 'rock' && cpuChoice === 'paper')
            newWinValueCpu++;
        else if (playerChoice === 'paper' && cpuChoice === 'scissors')
            newWinValueCpu++;
        else
            drawCount++;
        this.setState({ playerWins: newWinValue, cpuWins: newWinValueCpu, draws: drawCount });
        if (newWinValue === 10) {
            winner = loggedIn.firstName;
            document.getElementById('playButton').style.display = 'none';
            document.getElementById('resetButton').style.display = 'block';


        }
        else if (newWinValueCpu === 10) {
            winner = 'CPU';
            document.getElementById('playButton').style.display = 'none';
            document.getElementById('resetButton').style.display = 'block';

        }

    }
    handlePlayClick() {
        if (playerChoice === undefined)
            alert('Please choose rock, paper or scissors');
        else {
            var cpuChoiceRan = Math.floor(Math.random() * 100);
            var cpuBlank = document.getElementById('cpu');

            if (cpuChoiceRan < 33) {
                cpuChoice = 'rock';
                cpuBlank.setAttribute('src', rockPic);
                cpuPaperChoice.setAttribute('src', paperPic);
                cpuScissorsChoice.setAttribute('src', scissorsPic);
                cpuRockChoice.setAttribute('src', rockPicSecelected);
            }
            else if (cpuChoiceRan > 33 && cpuChoiceRan < 66) {
                cpuChoice = 'paper';
                cpuBlank.setAttribute('src', paperPic);
                cpuPaperChoice.setAttribute('src', paperPicSecelected);
                cpuScissorsChoice.setAttribute('src', scissorsPic);
                cpuRockChoice.setAttribute('src', rockPic);
            }
            else {
                cpuChoice = 'scissors';
                cpuBlank.setAttribute('src', scissorsPic);
                cpuPaperChoice.setAttribute('src', paperPic);
                cpuScissorsChoice.setAttribute('src', scissorsPicSecelected);
                cpuRockChoice.setAttribute('src', rockPic);
            }
            this.handleGame();
        }
    }



    render() {
        loadLogged()
        if (loggedIn !== null | loggedIn !== undefined) {
            return (
                <div className="main">
                    <div className='play'>
                        <h1>Play Rock Paper Scissors!</h1>
                        <div className="gameBoxes">
                            <div className='gameBox'>
                                <h2>{loggedIn.firstName}</h2>

                                <img src={blankPic} alt="img" id='player' />
                                <div className='choices'>
                                    <img src={rockPic} alt="img" id='rockChoice' onClick={handleRockClick} />
                                    <img src={paperPic} alt="img" id='paperChoice' onClick={handlePaperClick} />
                                    <img src={scissorsPic} alt="img" id='scissorsChoice' onClick={handleScissorsClick} />

                                </div>
                            </div>
                            <div className='vs'>
                                <h3>VS</h3>
                            </div>
                            <div className='gameBox'>

                                <h2>CPU</h2>
                                <img src={blankPic} alt="img" id='cpu' />
                                <div className='choices'>
                                    <img src={rockPic} alt="img" id='cpuRockChoice' />
                                    <img src={paperPic} alt="img" id='cpuPaperChoice' />
                                    <img src={scissorsPic} alt="img" id='cpuScissorsChoice' />

                                </div>
                            </div>


                        </div>

                        <div className="playButton"><button className='bigButton' id='playButton' onClick={this.handlePlayClick}>Play</button> </div>
                        <div className="playButton"><button className='bigButton' id='resetButton' onClick={this.reset}>Reset</button> </div>

                    </div>
                    <div className='results'>
                        <h2>
                            Results
                            </h2>
                        <h3>First to 10 wins!</h3>

                        <h4>{loggedIn.firstName}: {this.state.playerWins}</h4>
                        <h4>CPU: {this.state.cpuWins}</h4>
                        <h4>Draws: {this.state.draws}</h4>
                        <h4>Winner: {winner}</h4>

                    </div>
                </div>
            )
        }

        else {
            return (
                <LandComponent />
            );
        }


    }

}