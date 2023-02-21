import * as React from 'react';

export interface  ViewpostComponentProps {
}

export default function ViewpostComponent (props:  ViewpostComponentProps) {
  return (
    <div className='flex-auto w-599 border-x  '>
      <p className='py-3 font-bold text-lg '>Home</p>
      <div className='flex items-center h-11 text-sm border-b'>
        <p className=' text-center font-bold w-1/2'>For you</p>
        <p className='text-center w-1/2'>Following</p>
      </div>
    </div>
  );
}
