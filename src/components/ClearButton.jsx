import React from "react";
import './ClearnButton.css';

export const ClearButton = props => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)