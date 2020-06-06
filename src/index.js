import React from 'react';
import ReactDOM from 'react-dom';
import TitleContainer from './TitleContainer';
import QuestionContainer from './QuestionContainer';
import questionList from './questionList';
import Result from './Result';
import './index.css'

class App extends React.Component {
    state = {
        questionBank: [],
        gryfAnswer: 0,
        slythAnswer: 0,
        huffAnswer: 0,
        ravAnswer: 0,
        responses: 0,
        house: 'Slytherin',
    };

    getQuestions = () => {
        questionList().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    componentDidMount() {
        this.getQuestions();
    }

    updateScore(answer, gryfAnswer, huffAnswer, slythAnswer, ravAnswer) {
        if(answer === slythAnswer) {
            this.setState({slythAnswer: this.state.slythAnswer + 1})
        }
        else if(answer === gryfAnswer) {
            this.setState({gryfAnswer: this.state.gryfAnswer + 1})
        }
        else if(answer === huffAnswer) {
            this.setState({huffAnswer: this.state.huffAnswer + 1})
        }
        else if(answer === ravAnswer) {
            this.setState({ravAnswer: this.state.ravAnswer + 1})
        }
        this.setState({responses: this.state.responses < 5 ? this.state.responses + 1 : 5})
    }

    collectAnswer(answer) {
        console.log()
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            gryfAnswer: 0,
            slythAnswer: 0,
            huffAnswer: 0,
            ravAnswer: 0,
            responses: 0,
        });
    }

    

    render() {
        const myTitle = "Harry Potter Sorting Hat Quiz";
        return( 
            <div className={'pageBackground'}>
                <div className={'quiz-wrapper'}>
                    <TitleContainer title={myTitle}/>
                    {this.state.questionBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionBank.map(
                        ({question, answers, gryfAnswer, huffAnswer, slythAnswer, ravAnswer, questionId}) =>
                            <QuestionContainer 
                                question={question} 
                                answers={answers} 
                                key={questionId}
                                selected={this.collectAnswer}
                            />
                    )}

                    {this.state.responses === 5 ? 
                    (<Result house={this.state.house} playAgain={this.playAgain}/>): null}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)