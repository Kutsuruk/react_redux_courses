import React from 'react';

function Welcome() {
    return <h1>Hello world and welcome to React! - functional component</h1>
}

class SuperWelcome extends React.Component {
    render() {
        return <h1>Hello world and welcome to React! - class component</h1>
    }
}

let Lesson = () => {
    return(
        <div>
            <Welcome />
            <SuperWelcome /> 
        </div>
    )
}

export default Lesson;
