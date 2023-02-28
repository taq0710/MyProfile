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
          <p className='flex items-center justify-center hover:bg-gray-200 h-full text-base font-medium w-1/2 cursor-pointer'>
            <span >
              <p className='my-2'>For you</p>
              <div className='bg-tweet w-full h-1  rounded-full'></div>
            </span>
          </p>
          <p className='flex items-center justify-center text-gray-500 hover:bg-gray-200 text-base font-medium h-full w-1/2 cursor-pointer'>Following</p>
        </div>
      </div>
      <Formstt />
      <Posts />
    </div>
  );
}
