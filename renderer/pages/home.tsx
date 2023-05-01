import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import select from 'react-select'

function Home() {
  const [value, setValue] = useState('fcfs')

  // const 
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <main
        className={`flex min-h-screen  p-24 justify-center`}
      >
        <div className={'flex-col'}>
          <select></select>

          {/* <div className={'grid grid-cols-3 h-10 border-2 rounded-xl'}>
            <div className={"col-span-2 grid gird-cols-1 place-content-center"}>
             <div>
             {value}
             </div>
            </div>
            <div className={"h-10 w-10 grid gird-cols-1 place-content-center"}>
              <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
            </div>
          </div> */}
          
          <div className={'flex-col'}>
            <div onClick={() => setValue("fcfs")}>
              <span>First Come First Serve</span>
            </div>
            <div onClick={() => setValue("sjf")}>
              <span>Shortest Job first</span>
            </div>
            <div onClick={() => setValue("npp")}>
              <span>non-Preemptive Priority</span>
            </div>
            <div onClick={() => setValue("hrn")}>
              <span>High Response ratio Next</span>
            </div>
            <div onClick={() => setValue("pp")}>
              <span>PreemptivePriority</span>
            </div>
            <div onClick={() => setValue("rr")}>
              <span>Round Robin</span>
            </div>
            <div onClick={() => setValue("srt")}>
              <span>Shortest Remaining Time</span>
            </div>
          </div>
        </div>
        
        <div className={'h-10 flex-col m-10'}>
          testing
        </div>
      </main>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
