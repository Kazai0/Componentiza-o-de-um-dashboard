/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './buttonCupom.css'

export default param => {
    return (
        <div className="ButtonClass">
            <button> {param.thisNameButton} </button>
        </div>
    )
}