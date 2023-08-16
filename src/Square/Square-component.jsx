import React from "react";
import './Square-component.css';

export const Square = ({value, onClick}) => {
    const style = value === "X" ? "square x" : "square o";
    return (
        <button className={style} onClick = {onClick}>
        {value}
    </button>
    )
}