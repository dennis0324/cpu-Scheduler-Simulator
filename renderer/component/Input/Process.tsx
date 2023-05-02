import style from "styled-components"

const StyledFieldset = style.fieldset`
`

function Process({needPriority,handlePid,handleBrust,handleArrival,handlePriority}){
    let priorityBtn;
    if(needPriority === true) priorityBtn = <input
                                                onChange={handlePriority}
                                                type="text"
                                                id="arrival-time"
                                                placeholder="e.g. 0 2 4 6 8"
                                                // ref={arrivalTimeRef}
                                            />
    else priorityBtn = null;

    const colNumHandler = () => {
        if(needPriority === true) return "grid-cols-4";
        else return "grid-cols-3";
    }

    return (
        <StyledFieldset className={`flex gap-4`}>
            <div className={"flex-none w-20"}>

                <input
                    onChange={handlePid}
                    type="text"
                    id="pid"
                    placeholder="e.g. 0"
                    
                    // ref={arrivalTimeRef}
                />
            </div>
            <input
                onChange={handleBrust}
                type="text"
                id="brust-time"
                placeholder="e.g. 0"
                className={"cols-start-2 row-start-1"}

                // ref={arrivalTimeRef}
            />
            <input
                onChange={handleArrival}
                type="text"
                id="arrival-time"
                placeholder="e.g. 0"
                className="col-span-1"

                // ref={arrivalTimeRef}
            />  
            {priorityBtn}          
            
        </StyledFieldset>
    )
}

export default Process;