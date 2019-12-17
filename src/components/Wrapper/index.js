import React from 'react';
// import './App.css';

function Wrapper(props) {
    return <div className="container">{props.children}</div>
}

export default Wrapper;