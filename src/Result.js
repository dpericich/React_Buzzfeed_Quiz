import React from 'react';

const Result = (props) => {
    return(
        <div className="Results" style={{height: '100vh'}}>
            <h1>You got {props.house} as your house!</h1>
            <div class="ui yellow button" onClick={props.playAgain}>Try again!</div>
        </div>
    )
}

export default Result;