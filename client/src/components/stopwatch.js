import React, {useState} from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

function Stopwatch() {

    /*utilizing useState to set the state with React Hooks*/
    let [mSecs, setMSecs] = useState(0);
    let [secs, setSecs] = useState(0);
    let [mins, setMins] = useState(0);

    /*function to start the timer*/
    function startTimer(e){
        console.log('Start Button clicked!');
    }

    /*function to stop the timer*/
    function stopTimer(e){
        console.log('Stop Button clicked!');
    }

    /*function to reset the timer*/
    function resetTimer(e){
        console.log('Reset Button clicked!');
    }

    return(
        <header className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-6 col-xs-12'>
                    <Jumbotron>
                        <div className='fontgradient'>Fullmetal Alchemist Stopwatch</div>
                    </Jumbotron>
                    <Jumbotron>
                        <div className='fontgradient'>
                            00:00:00
                        </div>
                    </Jumbotron>
                    {/*when the Start button is clicked, it will run the handleStart function*/}
                    <button className='btn btn-primary' onClick={startTimer}>Start</button>
                    {/*when the Stop button is clicked, it will run the handleStop function*/}
                    <button className='btn btn-danger' onClick={stopTimer}>Stop</button>
                    {/*when the Reset button is clicked, it will run the handleReset function*/}
                    <button className='btn btn-warning' onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </header>
    )
}


export default Stopwatch;