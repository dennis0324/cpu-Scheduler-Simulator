import React from "react";
import style from "styled-components"
import DeleteButton from "./DeleteButton";
import {ControlProcess} from '../../pages/home';

const StyledFieldset = style.fieldset`
`

function Process(props:ControlProcess & {index} ){

    const handleChange = (title,e) => {
        props.changeValue(props.index,title,e.target.value)
    }

    const dataExist = (title) => {
        const data = props.processes[props.index][title]
        if(data=== undefined || data === -1){
            return false
        }
        return true

    }
    return (
        <tr>
            <td className={'w-14 mx-4 text-center'}>
                {props.index + 1}
            </td>
            <td>
                <input
                    onChange={(e) => handleChange("pid",e)}
                    type="text"
                    id="pid"
                    placeholder="number"
                    value={dataExist('pid') ? props.processes[props.index].pid : ''}
                    className={'w-14 mx-4'}
                />
            </td>
            <td>
                <input
                    onChange={(e) => handleChange("brustTime",e)}
                    type="text"
                    id="brust-time"
                    placeholder="number"
                    value={dataExist('brustTime') ? props.processes[props.index].brustTime : ''}
                    className={"w-14 mx-4"}

                />
            </td>
            <td>
                <input
                    onChange={(e) => handleChange("arrialTime",e)}
                    type="text"
                    id="arrival-time"
                    placeholder="number"
                    value={dataExist('arrialTime') ? props.processes[props.index].arrialTime : ''}
                    className={"w-14 mx-4"}
                />  
            </td>
            <td>
                <input
                    // readOnly={needPriority === false}
                    className={"w-14 mx-4"}
                    onChange={(e) => handleChange("priority",e)}
                    type="text"
                    id="arrival-time"
                    value={dataExist('priority') ? props.processes[props.index].priority : ''}
                    placeholder="e.g. 0 2 4 6 8"
                />   
            </td>
            <td className={'text-center'}>
                <DeleteButton
                index = {props.index}
                onButtonDelete = {props.removeProcessRow}
                />
            </td>
        </tr>
    )
}

export default Process;