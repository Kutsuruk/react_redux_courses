import React, { Component } from 'react';
timport PropTypes from 'prop-types';

/* // Old
class CounterButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    this.handleClick = this.handleClick.bind(this)
} */


const Counter = ({counter, string, func, number}) => {
    console.log(counter, string, func, number)
    return(
    <h3>{`Counter component. Counter values is: ${counter}`}</h3>
    )
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    string: PropTypes.string,
    func: PropTypes.func,
    number: PropTypes.number,
}

Counter.defaultProps = {
    func: () => {},
    number: 0,
    string: '',
}

// Modern
class CounterButton extends Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState(({ counter }) =>({
            counter: ++counter,
        }))
    }

    render() {
        const { counter } = this.state

        return (
            <div>
                <div>{counter}</div>
                <Counter counter={counter} />
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}

export default CounterButton;