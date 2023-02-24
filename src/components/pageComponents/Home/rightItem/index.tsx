import * as React from 'react';
import Search from './search';
import Trendings from './trending';

export interface RightitemComponentProps {
}

export default function RightitemComponent(props: RightitemComponentProps) {
  return (
    <div className='flex-auto w-rightitem sticky top-0'>
      <Search />
      <Trendings />
      
      
    </div>
  );
}
