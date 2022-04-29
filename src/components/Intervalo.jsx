import "./Intervalo.css";
import React from "react";

import Card from "./Card";
export default props => {
    return(
        <Card title="Intervalo de numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type= "number" value={0}/>
                </span>
                <span>
                    <strong> Maximo:</strong>
                    <input type= "number" value={10}/>
                </span>
            </div>
        </Card>
    )
}    