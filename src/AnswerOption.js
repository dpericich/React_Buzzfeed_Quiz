import React from 'react';

const AnswerOption = (props) => {
    return (
        <div style={{margin:'2.5px 5px'}}>
            <button className="ui yellow button large fluid">{props.answer}</button>
        </div>            
        )
};

export default AnswerOption;