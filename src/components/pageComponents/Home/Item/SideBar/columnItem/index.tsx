import * as React from 'react';
import { listMenu } from 'constants/listMenu';
import Logo from '../logo';

export interface ColumnItemProps { }

export default function ColumnItem(props: ColumnItemProps) {
  return (
    <div className='w-64'>
      <Logo />
        <ul>
          {listMenu.map((item) => (
            <div className='py-1'><li className={`w-48 flex items-center py-3 hover:bg-gray-300 cursor-pointer rounded-full font-normal text-lg ${item.key === 'home' ? 'font-bold' : ''}`} key={item.key}>{item.icon}{item.title}</li></div >
  
          ))}
        </ul>
    </div>
  );
}
