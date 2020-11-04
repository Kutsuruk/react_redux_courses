import React from 'react';

class CounterButton extends React.Component {
    state = {
        counter: 0,
    }   

    handleClick = () => {
        this.setState(prevState => ({
            counter: ++prevState.counter,
        }))
    }
    render() {
        const {counter} = this.state;

        return(
        <div>
            <div>{counter}</div>
            <button onClick={this.handleClick}>+1</button>
        </div>
        )
    }
}

export default CounterButton;