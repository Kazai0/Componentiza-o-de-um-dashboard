/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './headerCupom.css'

import ButtonCupom from "../button/buttonCupom";

export default param => {
    return (
        <div className="classHeader">

            <div className="classHeaderToCss">
                <h2>
                    Rotinas
                </h2>


                <input type="text" placeholder="Pesquisar" />

            </div>

            <div className="list"> </div>

            <div className="buttons">
                <ButtonCupom thisNameButton="Anotações" />

                <ButtonCupom thisNameButton="Rotinas" />

                <ButtonCupom thisNameButton="Indicadores" />
            </div>

        </div>
    )
}