import React from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

function Stopwatch() {

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
                    <button className='btn btn-primary'>Start</button>
                    {/*when the Stop button is clicked, it will run the handleStop function*/}
                    <button className='btn btn-danger'>Stop</button>
                    {/*when the Reset button is clicked, it will run the handleReset function*/}
                    <button className='btn btn-warning'>Reset</button>
                </div>
            </div>
        </header>
    )
}


export default Stopwatch;