/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Chart } from 'react-google-charts'

import './screenGraphic2.css'

export const data = [
    [
        "Dia",
        "React",
        "Node",
        "Jest",
    ],
    [1, 60, 0, 0],
    [2, 60, 0, 0],
    [3, 0, 0, 0],
    [4, 0, 120, 0],
    [5, 60, 60, 0],
    [6, 0, 120, 60],
    [7, 0, 0, 0],
    [8, 0, 0, 120],
    [9, 0, 120, 1],
    [10, 0, 0, 0],
    [11, 60, 60, 60],
    [12, 0, 120, 0],
    [13, 60, 60, 0],
    [14, 120, 0, 0],
];

export const options = {
    chart: {
        title: "minutos por dia",
    },
};
export default param => {
    return (
        <>
            <div className="ListBlock">

                <h1>{param.thisTitle}</h1>
                <Chart
                    chartType="Line"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
        </>
    )
}