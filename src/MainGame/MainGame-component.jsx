import React from "react";
import { Board } from "../Board/Board-component";
import { useState } from 'react';
import { ResetButton } from "../Reset-Button/Reset-Button-Component";

export const MainGame = () => {
    const [board, setBoard] =  useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    let numberOfClick = 0;
    const [over, setOver] = useState(false);

    const WIN_LINES = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
      ]

   const handleClick = (squareIdx) => {
    if(board[squareIdx] || winVerify(board)) {
        return
    }
    const updatedBoard = board.map((value, idx) => {
        if (idx === squareIdx) {
            if (xIsNext) {
                return "X"
            }else{
                return "O"
            }
        } else {
          return value;
        }
      })
      setBoard(updatedBoard);
      gameOver();
      if(numberOfClick >=8) {
           setOver(true);
      };
      if (winVerify(board)) {
        return;
      }
      setXIsNext(!xIsNext);
   }

   const winVerify = (board) => {
    for (let i = 0; i < WIN_LINES.length; i++) {
      const [x, y, z] = WIN_LINES[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null;
  }
  const gameOver = () => {
    for (let i = 0; i <board.length; i++) {
        if (board[i]) {
            numberOfClick = numberOfClick + 1;
        }
    }
  }

  const resetBoard = () => {
    setXIsNext("X");
    setOver(false);
    setBoard(Array(9).fill(null));
  }

    return (
        <div className="App">
             <span className="playOver">{over ? "Game Over" : ""}</span>
            <span className="next">Next is : {xIsNext ? "X" : "O"}</span>
            <Board squares = {board} onClick = {handleClick}/>
            <span className="winner">Winner is : {(winVerify(board))}</span>
            <div className="reset">
                <ResetButton resetBoard = {resetBoard} />
            </div>
        </div>
   ); 
}