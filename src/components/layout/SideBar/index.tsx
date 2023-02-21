import * as React from 'react';
import ColumnItem from './columnItem';


export interface SidebarComponentProps { }

export default function SidebarComponent(props: SidebarComponentProps) {
  return (
    <div className='flex flex-col items-end w-595 overflow-y-auto max-h-950'>
      <ColumnItem/>
      
    </div>
  );
}
