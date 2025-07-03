import {useState} from "react";
import { GameTitle } from "./GameTitle.jsx";
import { GameTurn } from "./GameTurn.jsx";
import styles from "./Game.module.css";

import { checkDraw, checkWinner } from "./utils.js";



export function Game() {
    console.log("render Game component");
    const title = "Tic Tac Toe";

    const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
//after each render

    const winner = checkWinner(gameBoard);
    const draw = checkDraw(gameBoard);
    console.log(winner)
    console.log(draw)
    const handlerClickCell = (index) => {
        if (gameBoard[index] || winner || draw) {
            return;
        } // If the cell is already filled or the game is not active, do nothing
      const newGameBoard = [...gameBoard];
      newGameBoard[index] = currentPlayer;
      setGameBoard(newGameBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };

    const resetGame = () => {
      setCurrentPlayer("X");
      setGameBoard(Array(9).fill(null));
    };

    return (
      <div className={styles.game}>
        <GameTitle title={title} />
        <GameTurn> {
            winner
              ? `Player ${winner.winner} wins`
              : draw
              ? "Draw"
              : `Player ${currentPlayer} turn`}
            
            
           </GameTurn>
           <div className={styles.board}>
        {gameBoard.map((cell, index) => {
          return (
            <div
              key={index}
              className={`${styles.cell} ${
                cell === "X" ? `${styles["x-mark"]}` : `${styles["o-mark"]}`
              } ${
                winner?.combination.includes(index) ? `${styles.winner}` : ""
              }`}
              onClick={() => handlerClickCell(index)}
            >
              {cell}
            </div>
          );
          })}
        </div>
        <button className = {styles.reset} onClick={resetGame}>
           Reset Game
        </button>
      </div>
    );
  }
