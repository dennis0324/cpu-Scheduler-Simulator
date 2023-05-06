import React, { useEffect, useState } from "react"
import NextButton from "../Input/NextButton"
import DoubleArrowButton from "./DoubleArrowButton"
function GrantChat({processes}){
    const [height,setHeight] = useState(0)
    const [sec,setSec] = useState(0)

    useEffect(()=> {
        const total = processes.reduce((acc,cur) => acc + cur.burstTime,0)
        setHeight(total * 10)
    },[processes])

    return (
        <div className={'output'}>
            <div className="gantt">
                <div className={"gantt_timeline_conatiner"}>
                    <div className={'gantt_timeline'} style={{width:`${height}px`,left:0,top:'50%'}}>
                        {processes?.map((process,index) => {
                            return (
                                <div>
                                    <span className="gantt_timeline_divider"></span>
                                    <div key={index} className={'gantt_timeline_process gantt_timeline_cell text-center'} style={{width:`${process.executeTime * 10}px`,backgroundColor:'rgb(233 233 233)'}}>
                                        {process.pid}
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrantChat