import React from 'react';

const QuestionPrompt = (props) => {
    return(
        <div className="QuestionPrompt" style={QuestionPromptStyle}>
            <h3>{props.question}</h3>
        </div>
    )
};

const QuestionPromptStyle = {
    background: 'black',
    color: 'white',
    borderRadius: '10px 10px 0px  0px',
    
}
export default QuestionPrompt;

