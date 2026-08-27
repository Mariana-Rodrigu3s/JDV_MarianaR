import { useState, useEffect } from "react";
import { Square } from "../Square/Square";
import styles from './board.module.css'



export function Board({squares, onPlay, winningLine}){
    // 

    const IsWinning = (index) =>{
        return winningLine ? winningLine.includes(index) : false;
    }
}