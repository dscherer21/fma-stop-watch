import React, {useState} from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

function Stopwatch() {

    /*utilizing useState to set the state with React Hooks*/
    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(0);
    const [hours, setHours] = useState(0);
    const [tick, setTick] = useState();
    let renderSecs;
    let renderMins;
    let renderHours;

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

    /*if secs is less than 10, render a zero in front of it.*/
    if(secs < 10){
        renderSecs = '0' + secs;
    } else{
        renderSecs = secs;
    }

    /*if mins is less than 10, render a zero in front of it.*/
    if(mins < 10){
        renderMins = '0' + mins;
    } else{
        renderMins = mins;
    }

    /*if hours is less than 10, render a zero in front of it.*/
    if(hours < 10){
        renderHours = '0' + hours;
    } else{
        renderHours = hours;
    }

    /*function to start the timer*/
    function startTimer() {
        console.log("Start Timer Button clicked!");
        /*setting tick as state so that it retains the setInterval function across re-renders*/
        setTick(setInterval(() => setSecs(secs => secs + 1), 1000));
    }

    /*function to stop the timer*/
    function stopTimer(){
        console.log('Stop Button clicked!');
        clearInterval(tick);
    }

    /*function to reset the timer*/
    function resetTimer(){
        console.log('Reset Button clicked!');
        clearInterval(tick);
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