import React from 'react';
import Square from './Square';

const Board = (props) => {
    const SquareHandler= (i) => (<Square 
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
    />)
    return (
        <div>
            <h4>Game Component</h4>
            <div className='board-row'>
                {SquareHandler(0)}
                {SquareHandler(1)}
                {SquareHandler(2)}
            </div>
            <div className='board-row'>
                {SquareHandler(3)}
                {SquareHandler(4)}
                {SquareHandler(5)}
            </div>
            <div className='board-row'>
                {SquareHandler(6)}
                {SquareHandler(7)}
                {SquareHandler(8)}
            </div>
        </div>
    );
}

export default Board;
