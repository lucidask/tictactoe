import React from "react"
import './Reset-Button-Component-style.css';

export const ResetButton = ({ resetBoard }) => {
    return (
        <button className="reset-btn" onClick={resetBoard}><i className="fa fa-refresh fa-spin"></i></button>
    )
}