import { useEffect, useState } from "react";
import OutputRow from "./OutputRow";

function OutputContainer({result}){
    const [group,setGroup] = useState(new Map());
    const [finish,setFinish] = useState(new Map());
    const grouped = () => {
        if(!result) return new Map();
        const group = new Map();
        const finish = new Map();
        result.forEach((item) => {
            const pid = item.pid;
            const collection = group.get(pid);
            if (!collection) {
                group.set(pid, [item]);
            }
            else {
                collection.push(item);
            }

        })
        console.log(group)
        return group
    }
    const getAverageFinishTime = () => {
        let total = 0;
        group.forEach((value,key) => {
            const lastOne = result?.slice().reverse().find(e => e.pid === key)
            total += lastOne.waitingTime + lastOne.executeTime
        }) 
        return (total / group.size).toFixed(2)
    }

    const getAverageWaitingTime = () => {
        let total = 0;
        group.forEach((value,key) => {
            value.forEach((e) => {total += e.waitingTime})
        }) 
        return (total / group.size).toFixed(2)
    }

    const getAverageTrunAroundTime = () => {
        let total = 0;
        group.forEach((value,key) => {
            value.forEach((e) => {total += e.waitingTime + e.executeTime})
        }) 
        return (total / group.size).toFixed(2)        
    }

    useEffect(() => {
        setGroup(grouped())
        // console.log("waitingTime",result.sort((a,b) => a.waitingTime - b.waitingTime))
        //make unique number array

        console.log("result",result);
    },[result])
    return (
        <table>
            <thead>
                <tr className="output_table">
                    <th>PID</th>
                    <th>BrustTime</th>
                    <th>FinishTime</th>
                    <th>ResponseTime</th>
                    <th>WatingTime</th>
                    <th>TurnAroundTime</th>
                </tr>
            </thead>
            <tbody>
                {
                Array.from(group.values())?.map((table,index) => {
                    console.log(table[0])
                    return <OutputRow key={index} data={table[0]} group={table} processes={result}/>
                }
                )}
                <tr>
                    <td colSpan={3} className="text-right px-1">average: </td>
                    <td>{getAverageFinishTime()}</td>
                    <td>{getAverageWaitingTime()}</td>
                    <td>{getAverageTrunAroundTime()}</td>
                </tr>
                
            </tbody>
        </table>
    )
}

export default OutputContainer