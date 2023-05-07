function OutputRow({data,group,processes}){
    const testing = ()=>{
        console.log("data",group);
        return <div></div>
    }

    const getFinishTime = () => {
        const lastOne = processes?.slice().reverse().find(e => e.pid === data.pid)
        return lastOne.waitingTime + lastOne.executeTime
    }

    return(
        <tr>
            <td>{data.pid}</td>
            <td>{data.burstTime}</td>
            <td>{getFinishTime()}</td>
            <td>{processes?.find(e => e.pid === data.pid).waitingTime}</td>
            <td>{group?.reduce((a,b) => a + b.waitingTime,0)}</td>
            <td>{group?.reduce((a,b) => a + b.waitingTime + b.executeTime,0)}</td>
        </tr>
    )
}

export default OutputRow