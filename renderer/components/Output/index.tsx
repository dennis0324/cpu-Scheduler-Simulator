import React, { useEffect, useState } from "react"
import NextButton from "../Input/NextButton"
import DoubleArrowButton from "./DoubleArrowButton"
import OutputContainer from "./OutputContainer"
function GrantChat({processes}){
    const [height,setHeight] = useState(0)
    const [sec,setSec] = useState(0)

    useEffect(()=> {
        const total = processes.reduce((acc,cur) => acc + cur.burstTime,0)
        setHeight(total * 10)
    },[processes])


    const showOnResult = () => {
        if(processes)
        return (
            <React.Fragment>
                <fieldset>
                    <label>Gannt Chart</label>
                    <div className="gantt">
                        <div className={"gantt_timeline_conatiner"}>
                            <div className={'gantt_timeline'}>
                                {processes?.map((process,index) => {
                                    return (
                                        <div className={'gantt_timeline_cell_container'}>
                                            <span className="gantt_timeline_divider"></span>
                                            <div key={index} className={'gantt_timeline_process gantt_timeline_cell align-middle text-center'} style={{width:`${process.executeTime * 10}px`,backgroundColor:'rgb(233 233 233)'}}>
                                                {process.pid}
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
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
            Output
            {
                showOnResult()
            }
            
        </div>
    )
}

export default GrantChat