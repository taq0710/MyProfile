import * as React from 'react';
import SidebarComponent from './SideBar';
import LeftitemComponent from './rightItem';
import ViewpostComponent from './Viewpost';

export interface  HomeComponentProps {
}

export default function HomeComponent (props:  HomeComponentProps) {
  return (
    <div className='flex justify-center h-full '>
      <SidebarComponent/>
      <ViewpostComponent/>
      <LeftitemComponent/>
    </div>
  );
}
