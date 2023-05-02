import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import select from 'react-select'
import Input from "../component/Input";

function Home({selectAlgor}) {
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
          <Input/>
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
