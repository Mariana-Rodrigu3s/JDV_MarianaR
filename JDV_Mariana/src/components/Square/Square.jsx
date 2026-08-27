import { useState, useEffect } from "react";




export function Square({value, OnSquareClick, IsWinning}){
    // Value: Guarda o símbolo atual daquela carta
    // OnsquareClick: é uma função recebida do componente no qual avisa que foi clicado
    // IsWinning: Um valor para saber se essa casa faz parte do trio q venceu o jogo

    const SquareClass = `${styles['square']} ${IsWinning ? styles[square-winning]`



}