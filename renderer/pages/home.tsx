import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Input from "../components/Input";

export type ControlProcess = {
  processes:any[]
  addProcessRow:Function,
  removeProcessRow:Function,
  changeValue:Function
}

function Home({selectAlgor}) {
  const [value, setValue] = useState('fcfs')
  // const processesRef = useRef([]);
  const [processes,setProcesses] = useState([]);

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
          />
        </div>
        
        <div className={'h-10 flex-col m-10'}>
          testing
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
