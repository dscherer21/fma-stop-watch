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

        let MSecs;
        let Secs;
        let Mins;
        if(this.state.miliseconds < 10){
            MSecs = <span>0{this.state.miliseconds}</span>
        } else {
            MSecs = <span>{this.state.miliseconds}</span>
        }

        if(this.state.seconds < 10){
            Secs = <span>0{this.state.seconds}</span>
        } else {
            Secs = <span>{this.state.seconds}</span>
        }

        if(this.state.minutes < 10){
            Mins = <span>0{this.state.minutes}</span>
        } else {
            Mins = <span>{this.state.minutes}</span>
        }

        if(this.state.miliseconds === 60){
            this.setState(prevState => {
                return {
                    miliseconds: 0,
                    seconds: prevState.seconds +1
                }
            })
        }

        if(this.state.seconds === 60){
            this.setState(prevState => {
                return {
                    seconds: 0,
                    minutes: prevState.minutes +1
                }
            })
        }
    

        return(
            <header className='container'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-6 col-xs-12'>
                        <Jumbotron>
                            <div className='fontgradient'>Fullmetal Alchemist Stopwatch</div>
                        </Jumbotron>
                        <Jumbotron>
        <div className='fontgradient'>{Mins}:{Secs}:{MSecs}</div>
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