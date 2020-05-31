import React from 'react';
import ReactDOM from 'react-dom';
import TitleContainer from './TitleContainer';
import './index.css'

const App = () => {
    const myTitle = "Harry Potter Quiz"

    return( 
        <div className={'pageBackground'}>
            <div className={'quiz-wrapper'}>
                <TitleContainer title={myTitle}/>
                <p>Hello World!</p>
                <button class="ui button">Submit</button>                
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)