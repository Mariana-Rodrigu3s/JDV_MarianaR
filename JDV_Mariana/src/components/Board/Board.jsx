import { useState, useEffect } from "react";
import { Square } from "../Square/Square";
import styles from './board.module.css'



export function Board({squares, onPlay, winningLine}){
    // 

    const IsWinning = (index) =>{
        return winningLine ? winningLine.includes(index) : false;
    }

    return(
        <>
        <div className={styles['board']}
        >
            {squares.map((value, index) => (
                <Square
                key={index}
                value={value}
                OnSquareClick={() => onPlay(index)}
                IsWinning={IsWinning(index)}
                >

                </Square>
            ))}


        </div>
        </>
    )
}