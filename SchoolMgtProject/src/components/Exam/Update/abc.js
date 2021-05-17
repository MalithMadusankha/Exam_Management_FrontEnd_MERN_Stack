import React , {Component} from 'react';

const abc = (props) => {
    return (
        <div>
            Componet abc
            ID : {props.match.params.examId}
        </div>
    )
}

export default abc;