import { useState, useEffect } from "react";

import styles from './Square.module.css'




export function Square({value, OnSquareClick, IsWinning}){
    // Value: Guarda o símbolo atual daquela carta
    // OnsquareClick: é uma função recebida do componente no qual avisa que foi clicado
    // IsWinning: Um valor para saber se essa casa faz parte do trio q venceu o jogo

    const SquareClass = `${styles['square']} ${IsWinning ? styles['square-winning'] : ''}`;

    return(
        <>
        {/* ClassName = SquareClass : Aplica as classes dinâmicas calculadas 
        onClick = OnSquareClick: Conecta o evento de clique do navegador com a função pai
        AriaLabel : Apenas aplica práticas de acessibilidade
        Value: Renderiza o conteúdo da casa
        */}
        <button
        className={SquareClass}
        onClick={OnSquareClick}

        aria-label={value ? `Casa ocupada por ${value}` : "Casa vazia do tabuleiro"}
        >
            {value}

        </button>

        </>
    );



}