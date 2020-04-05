import React, {useState} from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

function Stopwatch() {

    /*utilizing useState to set the state with React Hooks*/
    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(0);
    const [hours, setHours] = useState(0);
    const [tick, setTick] = useState();
    const [timerRunning, setTimerRunning] = useState(false);
    /*Render a zero in front of the variable, then remove when the variable if equal to double digits*/
    let renderSecs= ('0' + secs).slice(-2);
    let renderMins= ('0' + mins).slice(-2);
    let renderHours= ('0' + hours).slice(-2);

    /*if secs is greater than 59, increment mins by 1 and reset secs to zero.*/
    if(secs > 59) {
        setMins(mins => mins + 1);
        setSecs(0);
    }

    /*if mins is greater than 59, increment hours by 1 and reset mins to zero.*/
    if(mins > 59) {
        setHours(hours => hours + 1);
        setMins(0);
    }

    /*function to start the timer*/
    function startTimer() {
        console.log("Start Timer Button clicked!");
        /*This IF statement prevents additional setIntervals from being stacked while the timer is running.*/
        if(timerRunning === false) {
            /*setting tick as state so that it retains the setInterval function across re-renders*/
            setTick(setInterval(() => setSecs(secs => secs + 1), 1000));
            setTimerRunning(true);
        }
    }

    /*function to stop the timer*/
    function stopTimer(){
        console.log('Stop Button clicked!');
        clearInterval(tick);
        setTimerRunning(false);
    }

    /*function to reset the timer*/
    function resetTimer(){
        console.log('Reset Button clicked!');
        clearInterval(tick);
        setTimerRunning(false);
        setSecs(0);
        setMins(0);
        setHours(0);
    }

    return(
        <header className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-6 col-xs-12'>

                    <Jumbotron>
                        <div className='fontgradient'>Fullmetal Alchemist Stopwatch</div>
                    </Jumbotron>

                    <div className='jumbotron'>
                        <p className='fontgradient'>
                            {renderHours}:{renderMins}:{renderSecs}
                        </p>
                    </div>

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