import React from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

const Stopwatch = () => {
    return(
      <header className='container'>
        <div className='row'>
            <div className='col-md-6 col-xs-12'>
                <Jumbotron>Fullmetal Alchemist Stopwatch</Jumbotron>
                <Jumbotron>00:00:00</Jumbotron>
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            
            </div>
        </div>
      </header>
    )
}


export default Stopwatch;