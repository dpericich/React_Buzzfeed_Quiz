import React from 'react';
import QuestionPrompt from './QuestionPrompt';
import AnswerOption from './AnswerOption';


const QuestionContainer = (props) => {

    return(
        <div className="QuestionContainer" style={QuestionContainerStyle}>
            <QuestionPrompt question={props.question}/>
            {props.answers.map(answer => 
                <AnswerOption answer={answer} selected={props.selected}
                />
                )}
            
        </div>       
    );
}

const QuestionContainerStyle = {
    backgroundColor: 'white',
    margin: '5px 15px',
    borderRadius: '10px',
    paddingBottom: '2px'
}

export default QuestionContainer;