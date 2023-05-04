import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import style from "styled-components"
import AddButton from "./AddButton";
import Process from "./Process";
import { OptionType } from "./SelectAlgor";
import {ControlProcess} from '../../pages/home';


const StyleCompo = style.table`
  // border: 1px solid #e5e7eb;

`

const StyledTHead = style.thead`
background-color: #f8f8f8;
`

type InputProps = {
  selectedAlgo: OptionType;
  index:number;
  setSelectedAlgo: Dispatch<SetStateAction<{}>>;
  setArrivalTime: Dispatch<SetStateAction<number[]>>;
  setBurstTime: Dispatch<SetStateAction<number[]>>;
  setTimeQuantum: Dispatch<SetStateAction<number>>;
  setPriorities: Dispatch<SetStateAction<number[]>>;
};

function ProcessConatiner(props:ControlProcess){
  const [needPriority, setNeedPriority] = useState(false);
  useEffect(() => {
    console.log("processchanged")
    // props.processes.current?.push({})
  },[props.processes])

  const combine = (index) => {
    return {
      ...props,
      index:index
    }
  }


  return(
    <StyleCompo className={''}>
      <StyledTHead>
        <tr className={'w-full'}>
          <th className={'w-14 px-4 py-4'}>index</th>
          <th className={'w-14 px-4 py-4'}>pid</th>
          <th className={'w-14 px-4 py-4'}>brustTime</th>
          <th className={'w-14 px-4 py-4'}>ArrivalTime</th>
          <th className={'w-14 px-4 py-4'}>Priority</th>
          <th className={'w-14 px-4 py-4'}>
            <AddButton buttonPressed={props.addProcessRow}/>
          </th>

        </tr>        
      </StyledTHead>
      <tbody>
      {
        props.processes.map((process, index) => <Process 
        {
          ...combine(index)
        }
        />)
      }
      </tbody>
    </StyleCompo>
  )
}

export default ProcessConatiner;