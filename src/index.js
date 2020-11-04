import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Lesson from './components_02/Lesson'
import CounterButton from './State_03/Lesson'

React.createElement('div', null, 'Simple div with text')
React.createElement('input', {className: 'just-class'})

ReactDOM.render(
<CounterButton />
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
