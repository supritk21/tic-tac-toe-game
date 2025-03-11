import React, {useState} from 'react';
import Square from './Square';

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const checkWinner = () => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    const winner = checkWinner();

    const handleClick = (index) => {
       const copyState = [...state];
       if(copyState[index] != null) return;
       copyState[index] = xIsNext ? 'X' : 'O';
       setState(copyState);
       setXIsNext(!xIsNext);
    }
    const resetState = () => {
        setState(Array(9).fill(null));
        setXIsNext(true);
    }
    return (
        <div className='board-container'>
            { winner !=null ? 
            
            <h1 style={{ 
                color: "#28a745", 
                fontSize: "2rem", 
                fontWeight: "bold", 
                textAlign: "center", 
                backgroundColor: "#f8f9fa", 
                padding: "10px", 
                borderRadius: "8px", 
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
            }}>
                Winner is: {winner}
            </h1>   :
            <> 
                <div className='status'> Player { xIsNext? "X" : "O"} move </div>
                <div className='board-row'>
                    <Square onClick = { ()=> handleClick(0) } value = {state[0]} />
                    <Square onClick = { ()=> handleClick(1) } value = {state[1]} />
                    <Square onClick = { ()=> handleClick(2) } value = {state[2]} />
                </div>
                <div className='board-row'>
                    <Square onClick = { ()=> handleClick(3) } value = {state[3]} />
                    <Square onClick = { ()=> handleClick(4) } value = {state[4]} />
                    <Square onClick = { ()=> handleClick(5) } value = {state[5]} />
                </div>
                <div className='board-row'>
                    <Square onClick = { ()=> handleClick(6) } value = {state[6]} />
                    <Square onClick = { ()=> handleClick(7) } value = {state[7]} />
                    <Square onClick = { ()=> handleClick(8) } value = {state[8]} />
                </div>
            </>  }
            <button onClick = { resetState } className='button'>{winner == null? "Reset": "RePlay"}</button>
        </div>
    );
}

export default Board;