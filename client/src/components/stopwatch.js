import React from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

const Stopwatch = () => {
    return(
      <header className='container'>
        <div className='row justify-content-md-center'>
            <div className='col-md-6 col-xs-12'>
                <Jumbotron>
                    <div className='fontgradient'>Fullmetal Alchemist Stopwatch</div>
                </Jumbotron>
                <Jumbotron>
                    <div className='fontgradient'>00:00:00</div>
                </Jumbotron>
                <button className='btn btn-primary'>Start</button>
                <button className='btn btn-danger'>Stop</button>
                <button className='btn btn-warning'>Reset</button>
            
            </div>
        </div>
      </header>
    )
}


export default Stopwatch;