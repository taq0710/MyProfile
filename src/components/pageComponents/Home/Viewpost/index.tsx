import * as React from 'react';
import Formstt from './FormStt';
import Posts from './post';

export interface ViewpostComponentProps {

}

export default function ViewpostComponent(props: ViewpostComponentProps) {
  return (
    <div className='flex-auto w-viewpost border-x '>
      <div className='sticky top-0 bg-white shadow'>
        <p className='py-3 ml-2 font-bold text-lg'>Home</p>
        <div className='flex items-center h-11 text-sm border-b'>
          <p className='flex items-center justify-center hover:bg-gray-200 h-full text-base font-bold w-1/2 cursor-pointer'><span className='border-tweet rounded border-b-4 py-2'>For you</span></p>
          <p className='flex items-center justify-center  text-gray-500 hover:bg-gray-200 text-base h-full w-1/2 cursor-pointer'>Following</p>
        </div>
      </div>
      <Formstt />
      <Posts />
    </div>
  );
}
