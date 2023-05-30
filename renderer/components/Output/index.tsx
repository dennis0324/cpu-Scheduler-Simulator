import React, { useEffect, useState } from "react"
import NextButton from "../Input/NextButton"
import DoubleArrowButton from "./DoubleArrowButton"
import Gantt from "./Gantt"
import OutputContainer from "./OutputContainer"
function GrantChat({processes}){


    const showOnResult = () => {
        if(processes.length > 0)
        return (
            <React.Fragment>
                <fieldset>
                    <label>Gannt Chart</label>
                    <div className="gantt">
                        <Gantt processes={processes}/>
                    </div>
                </fieldset>
                <fieldset>
                    <OutputContainer result={processes}/>
                </fieldset>
            </React.Fragment>

        )
    }

    return (
        <div className={'output'}>
            <div className={'output-title'}>
                Output
            </div>
            {
                showOnResult()
            }

        </div>
    )
}

export default GrantChat