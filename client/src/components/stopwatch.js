import React from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        }
    }

    render() {
        return(
            <header className='container'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-6 col-xs-12'>
                        <Jumbotron>
                            <div className='fontgradient'>Fullmetal Alchemist Stopwatch</div>
                        </Jumbotron>
                        <Jumbotron>
                            <div className='fontgradient'>{this.state.minutes}:{this.state.seconds}:{this.state.miliseconds}</div>
                        </Jumbotron>
                        <button className='btn btn-primary'>Start</button>
                        <button className='btn btn-danger'>Stop</button>
                        <button className='btn btn-warning'>Reset</button>
                    </div>
                </div>
            </header>
        )
    }
}


export default Stopwatch;