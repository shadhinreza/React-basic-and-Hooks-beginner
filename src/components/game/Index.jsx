import React, { Component } from 'react';
import Board from './Board';


function calculate(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6] 
    ]
    for(let i = 0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null
}

class Index extends Component {
    state = {
        history: [{squares : Array(9).fill(null)}],
        step : 0,
        xisNext : true 
    }
    buttonHandler = i =>{
        let history = this.state.history.slice(0, this.state.step + 1);
        let current = history[history.length - 1]
        let squares = current.squares.slice();
        if(calculate(squares) || squares[i]){
            return
        }
        squares[i] = this.state.xisNext ? 'X' : 0
        this.setState({
            history : history.concat([{squares}]),
            step : history.length,
            xisNext : !this.state.xisNext
        })
    }
    jumto = (step) =>{
        this.setState({
            step : step,
            xisNext: step % 2 === 0
        })
    }
    render() {
        let history = this.state.history
        let current = history[this.state.step]
        let winner = calculate(current.squares)
        const moves = history.map((_, move) => {
            const desk = move ? 'Go to Move #' + move : 'Go to Game Start'
            return (
                <li key=''>
                    <button onClick={() => this.jumto(move)}>{desk}</button>
                </li>
            )
        })
        let status = '';
        if(winner){
            status = 'Winner ' + winner
        }else{
            status = 'Next Player ' + this.state.xisNext ? 'X' : 0 
        }
        return (
            <div>
                <h3>Tic-Tac-Toe</h3> 
                <Board squares={current.squares} onClick={this.buttonHandler}/>
                <div>
                    {status}
                    <div>
                    <ol>
                        {moves}
                    </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
