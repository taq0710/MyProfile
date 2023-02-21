import * as React from 'react';
import ColumnItem from './columnItem';
import User from './userItem';

export interface SidebarComponentProps { }

export default function SidebarComponent(props: SidebarComponentProps) {
  return (
    <div className='flex flex-col items-end w-595 '>

      <ColumnItem />
      <div className='py-2'>
        <p className='w-48 py-2.5 mr-16 bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-full font-normal text-center text-xl text-white'>Tweet</p>
        </div>
      <User />
    </div>
  );
}
