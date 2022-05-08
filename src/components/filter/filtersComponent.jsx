/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import 'react-datepicker/dist/react-datepicker.css'

import './filtersComponent.css'
import * as styles from './styles'

export default () => {
    return (
        <div className="FilterComponent">


            <h1>Filtro de Resultados</h1>
            <div className="FieldInput">

                <styles.InputCustom type="date">
                </styles.InputCustom>
                <styles.InputCustom type="date">
                </styles.InputCustom>

            </div>
        </div>
    )
}