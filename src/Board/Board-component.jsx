import React from "react";
import { Square } from "../Square/Square-component";
import "./Board-component.css";

export const Board = ({squares, onClick}) => (
	<div className = 'board'>
        <div className="board content">
            {squares.map((value, index) => (
                <Square 
                    key = {index} 
                    value =  {value} 
                    onClick={() => onClick(index)} />
            ))}
        </div>
	</div>
);