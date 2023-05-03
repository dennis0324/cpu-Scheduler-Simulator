import { useEffect, useRef, useState } from "react";
import style from "styled-components"
import Process from "./Process";


const StyleCompo = style.div`
  border: 1px solid #e5e7eb;
`
function ProcessConatiner(){
  const processesRef = useRef([]);
  const [needPriority, setNeedPriority] = useState(false);

  const handlePid = () => {
    console.log("pid changed");
  }

  const handleBrust = () => {

  }
  
  const handleArrival = () => {

  }
  const handlePriority = () => {
  
  }
  useEffect(() => {
    processesRef.current.push({})
  },[])
  return(
    <StyleCompo>
      {
        processesRef.current.map((process, index) => <Process 
        index = {index}
        needPriority={needPriority}
        handlePid={handlePid}
        handleBrust={handleBrust}
        handleArrival={handleArrival}
        handlePriority={handlePriority}
        key={index}
        />)
      }
    </StyleCompo>
  )
}

export default ProcessConatiner;