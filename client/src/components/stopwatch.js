import React from "react";
import './stopwatch.css';
import { Jumbotron } from "reactstrap";

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        }

        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    
    }

    /*function that increments milliseconds by 1 every millisecond*/
    handleStart(event, error){
        event.preventDefault();
        console.log('Start Button Clicked!');
        this.setState({
            milliseconds: (this.state.milliseconds + 1) 
        });
        console.log(this.state.milliseconds);
        
        
        /*setInterval(() => {
            this.setState({
                milliseconds: (this.state.milliseconds + 1) 
            });
            console.log('tick');
        }, 1)*/

        /*Increment seconds when milliseconds reaches 1000 and reset milliseconds
        if(this.state.milliseconds === 1000){
            this.setState({
                milliseconds: 0,
                seconds: (this.state.seconds +1)
            })
        }

        /*Increment minutes when seconds reaches 60 and reset seconds
        if(this.state.seconds === 60){
            this.setState({
                seconds: 0,
                minutes: (this.state.minutes +1)
            })
        }*/

        if(error){
            console.log(error);
        }
    };

    handleStop(event){
        console.log('Stop Button Clicked!');
    }

    handleReset(event){
        console.log('Reset Button Clicked!');
    }

   

    

    render() {

        let MSecs;
        let Secs;
        let Mins;

        /*Show a zero in front of single digit numbers
        if(this.state.milliseconds < 10){
            MSecs = <span>0{this.state.milliseconds}</span>
        } else {
            MSecs = <span>{this.state.milliseconds}</span>
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
        }*/

        return(
            <header className='container'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-6 col-xs-12'>
                        <Jumbotron>
                            <div className='fontgradient'>Fullmetal Alchemist Stopwatch</div>
                        </Jumbotron>
                        <Jumbotron>
                            <div className='fontgradient'>
                                {/*this.state.minutes < 10 ? (
                                    <span>0{this.state.minutes}</span>
                                ) : (
                                <span>{this.state.minutes}</span>
                                )}:{this.state.seconds < 10 ? (
                                    <span>0{this.state.seconds}</span>
                                ) : (
                                <span>{this.state.seconds}</span>
                                )}:{this.state.milliseconds < 10 ? (
                                    <span>0{this.state.milliseconds}</span>
                                ) : (
                                <span>{this.state.milliseconds}</span>
                                )*/}
                                {this.state.minutes}:{this.state.seconds}:{this.state.milliseconds}
                            </div>
                        </Jumbotron>
                        {/*when the Start button is clicked, it will run the handleStart function*/}
                        <button className='btn btn-primary' onClick={this.handleStart}>Start</button>
                        {/*when the Stop button is clicked, it will run the handleStop function*/}
                        <button className='btn btn-danger' onClick={this.handleStop}>Stop</button>
                        {/*when the Reset button is clicked, it will run the handleReset function*/}
                        <button className='btn btn-warning' onClick={this.handleReset}>Reset</button>
                    </div>
                </div>
            </header>
        )
    }
}


export default Stopwatch;