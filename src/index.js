import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CounterButton from './03_state/Lesson'
import Lesson from './02_components/Lesson';


React.createElement('div', null, 'Simple div with text')
React.createElement('input', {className: 'just-class'})

ReactDOM.render(
<CounterButton />,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
