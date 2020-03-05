import React, {useState, useEffect} from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

function Stopwatch() {

    /*utilizing useState to set the state with React Hooks*/
    const [mSecs, setMSecs] = useState(0);
    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(0);

    /*function to start the timer*/
    function startTimer(e) {
        e.preventDefault();
        console.log("Start Timer Button clicked!");
        //setInterval(() => (setMSecs(mSecs + 1), console.log(mSecs)), 1000);
        setMSecs(mSecs + 1);
        console.log(mSecs);
    }

    /*function to stop the timer*/
    const stopTimer = (e) => {
        console.log('Stop Button clicked!');
        clearInterval();
    }

    /*function to reset the timer*/
    function resetTimer(e){
        console.log('Reset Button clicked!');
        setMSecs(mSecs + 1);
        console.log(mSecs);
    }

    return(
        <header className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-6 col-xs-12'>
                    <Jumbotron>
                        <div className='fontgradient'>Fullmetal Alchemist Stopwatch</div>
                    </Jumbotron>
                    <Jumbotron>
                        <p className='fontgradient'>
                            {mSecs}
                        </p>
                    </Jumbotron>
                    {/*when the Start button is clicked, it will run the startTimer function*/}
                    <button className='btn btn-primary' onClick={startTimer}>Start</button>
                    {/*when the Stop button is clicked, it will run the stopTimer function*/}
                    <button className='btn btn-danger' onClick={stopTimer}>Stop</button>
                    {/*when the Reset button is clicked, it will run the resetTimer function*/}
                    <button className='btn btn-warning' onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </header>
    )
}


export default Stopwatch;