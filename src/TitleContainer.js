import React from 'react'

const TitleContainer = (props) => {
    return (
    <div style={TitleStyle}>{props.title}</div>
    );
}


const TitleStyle = {
    fontSize: '40px',
    margin: '25px 10px',
}

export default TitleContainer;