import style from "styled-components"

const StyledFieldset = style.fieldset`
`

function Process({index,needPriority,handlePid,handleBrust,handleArrival,handlePriority}){
    let priorityBtn;
    if(needPriority === true) priorityBtn = <input
                                                onChange={handlePriority}
                                                type="text"
                                                id="arrival-time"
                                                placeholder="e.g. 0 2 4 6 8"
                                                // ref={arrivalTimeRef}
                                            />
    else priorityBtn = null;

    return (
        <StyledFieldset className={`flex w-100`}>
            <div className={'mx-4'}>
                {index + 1}
            </div>
            <input
                onChange={handlePid}
                type="text"
                id="pid"
                placeholder="number"
                className={'w-14 mx-4'}
            />
            <input
                onChange={handleBrust}
                type="text"
                id="brust-time"
                placeholder="number"
                className={"w-14 mx-4"}

            />
            <input
                onChange={handleArrival}
                type="text"
                id="arrival-time"
                placeholder="number"
                className={"w-14 mx-4"}
            />  
            {priorityBtn}          
            
        </StyledFieldset>
    )
}

export default Process;