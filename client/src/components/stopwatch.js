import React, {useState, useEffect} from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

function Stopwatch() {

    /*utilizing useState to set the state with React Hooks*/
    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(0);
    const [hours, setHours] = useState(0);
    const [tick, setTick] = useState();

    /*function to start the timer*/
    function startTimer() {
        console.log("Start Timer Button clicked!");
        /*setting tick as state so that it retains the setInterval function across re-renders*/
        setTick(setInterval(() => setSecs(secs => secs + 1), 1000));
    }

    /*function to stop the timer*/
    const stopTimer = () => {
        console.log('Stop Button clicked!');
        clearInterval(tick);
    }

    /*function to reset the timer*/
    function resetTimer(e){
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
                            {hours}:{mins}:{secs}
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