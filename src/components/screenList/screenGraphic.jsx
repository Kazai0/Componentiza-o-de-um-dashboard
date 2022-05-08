/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Chart } from 'react-google-charts'

import './screenGraphic.css'

const data = [

    ["Atividades", "Horas por dia"],
    ["Trabalho", 135],
    ["Alimentação", 37.5],
    ["Diversão", 45],
    ["Estudo", 32],
    ["Descanso", 105],

];

export default param => {
    return (
        <>
            <div className="ListBlock">
                <h1>{param.thisTitle}</h1>
                <Chart chartType="PieChart"
                    data={data} width={"100%"}
                    height={"400px"} />
            </div>
        </>
    )
}