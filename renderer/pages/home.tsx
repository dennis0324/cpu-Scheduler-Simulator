import React, { useRef, useState } from 'react';
import Head from 'next/head';
import {fcfs, sjf, srt, nonpreemptivePriority, preemptivePriority, rr, hrn} from 'cpuschedulerts';
import Input from "../components/Input";
import GrantChat from '../components/Output';
import { defaultOption, OptionType } from '../components/Input/SelectAlgor';
import { createProcess } from 'cpuschedulerts/dist/schedulAlgorithm/cpuScheduler';

export type ControlProcess = {
  processes:any[]
  selectAlgor:OptionType,
  addProcessRow:Function,
  removeProcessRow:Function,
  changeValue:Function,
  changeAlgorithm:Function,
  simulate:Function
}

function Home({selectAlgor}) {
  const [alogorithm, setAlogorithm] = useState(defaultOption)

  // const processesRef = useRef([]);
  const [processes,setProcesses] = useState([]);
  const [result,setResult] = useState([]);

  const addProcessRow = () => {
    console.log(processes)
    const currentProssess = [...processes]
    currentProssess.push({
      pid:-1,
      brustTime:-1,
      arrivalTime:-1,
      priority:-1
    })
    setProcesses(currentProssess)
  }

  const removeProcessRow = (id) => {
    console.log('delete' + id)
    const currentProssess = [...processes]
    currentProssess.splice(id,1)
    console.log(currentProssess)

    setProcesses(currentProssess)
  }

  const changeValue = (id,title,value) => {
    const currentProssess = [...processes]
    currentProssess[id][title] = value
    setProcesses(currentProssess)
    console.log(processes)
  }

  const simulate = () => {
    let pcbs = processes.map(e => createProcess(
      Number(e.pid),
      Number(e.arrivalTime),
      Number(e.brustTime),
      Number(e.priority)
    ))

    pcbs = pcbs.sort((a,b) => a.arrivalTime - b.arrivalTime);
    const unFilled = pcbs.find(e => Object.entries(e).find(([e,value])=> value === -1))
    if(unFilled) return
    if(alogorithm.value === 'FCFS'){
      console.log(pcbs)
      const FCFS = new fcfs();
      FCFS.simulate(pcbs)
      setResult(FCFS.getResult())
      console.log(FCFS.getResult())
    }
    else if(alogorithm.value === 'HRN'){
      const HRN = new hrn();
      HRN.simulate(pcbs)
      setResult(HRN.getResult())
      console.log(HRN.getResult())
    }
    else if(alogorithm.value === 'NPP'){
      const NPP = new nonpreemptivePriority();
      NPP.simulate(pcbs)
      setResult(NPP.getResult())
      console.log(NPP.getResult())
    }
    else if(alogorithm.value === 'PP'){
      const PP = new preemptivePriority();
      PP.simulate(pcbs)
      setResult(PP.getResult())
      console.log(PP.getResult())
    }
    else if(alogorithm.value === 'RR'){
      const RR = new rr(3);
      RR.simulate(pcbs)
      setResult(RR.getResult())
      console.log(RR.getResult())
    }
    else if(alogorithm.value === 'SRTF'){
      const SRTF = new srt(3);
      SRTF.simulate(pcbs)
      setResult(SRTF.getResult())
      console.log(SRTF.getResult())
    }
    else if(alogorithm.value === 'SJF'){
      const SJF = new sjf();
      SJF.simulate(pcbs)
      setResult(SJF.getResult())
      console.log(SJF.getResult())
    }
  }

  // const 
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <main
        className={`flex min-h-screen  p-24 justify-center`}
      >
        {/* <ProcessContainer/> */}
        <div className={'flex-col'}>
          <Input
            processes={processes}
            addProcessRow={addProcessRow}
            removeProcessRow={removeProcessRow}
            changeValue={changeValue}
            selectAlgor={alogorithm}
            changeAlgorithm={setAlogorithm}
            simulate={simulate}
          />
        </div>
        
        <div className={'h-10 flex-col m-10'}>
          <GrantChat/>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
