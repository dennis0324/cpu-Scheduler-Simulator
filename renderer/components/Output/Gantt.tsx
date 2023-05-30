import { createRef, useRef, useState } from "react"

function Gantt({processes}){
    const [totalTime,setTotalTime] = useState([]);

    let total = 0;
    const tempArr = [];
    processes.forEach(process => {
        tempArr.push(total);
        total += process.executeTime;
    })
    tempArr.push(total);
    // console.log('testing');
    // setTotalTime(tempArr);
    return (
        <div className={"gantt_timeline_conatiner"}>
            <div className={'gantt_timeline'}>
                {processes?.map((process,index) => {
                    return (
                        <div className={'gantt_timeline_cell_container'}>
                            <span className="gantt_timeline_divider" data-curentTime={`${tempArr[index]}`}></span>
                            <div key={index} className={'gantt_timeline_process gantt_timeline_cell align-middle text-center'} style={{width:`${process.executeTime * 10}px`,backgroundColor:'rgb(233 233 233)'}}>
                                {process.pid}
                            </div>
                        </div>
                    )
                })
                }
                <div className={'gantt_timeline_cell_container'}>
                    <span className="gantt_timeline_divider" data-curentTime={`${tempArr[tempArr.length - 1]}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Gantt