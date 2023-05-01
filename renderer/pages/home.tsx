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
