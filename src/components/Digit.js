import React from 'react';
import './Digit.css';

function Digit(props) {
  
  let numbers = [
    ['d1', 'd3' ,'d4', 'd5', 'd6', 'd7'],
    ['d6', 'd7'],
    ['d1', 'd2' , 'd3' , 'd5', 'd6'],
    ['d1', 'd3' ,'d2', 'd6', 'd7'],
    ['d2', 'd4', 'd6', 'd7'],
    ['d1', 'd2', 'd3' ,'d4', 'd7'],
    ['d1', 'd2' ,'d3' ,'d4', 'd5', 'd7'],
    ['d1', 'd6', 'd7'],
    ['d1', 'd2' ,'d3' ,'d4', 'd5', 'd6', 'd7'],
    ['d1', 'd2', 'd3' ,'d4', 'd6', 'd7']
  ];

    let listOfClasses = numbers[props.value];
    let renderList = listOfClasses.map(cls => {
      return cls
    });
    return (   
      <span className="digit">
        {renderList.map((cslNm, index) => {
          return <span className={cslNm} key={index}></span>
        })}
      </span>
    )
}

export default Digit;
