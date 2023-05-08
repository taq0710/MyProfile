import * as React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai'
import Tippy from '@tippyjs/react/headless'
export interface SkillsProps {
}

export default function Skills(props: SkillsProps) {
    return (
        <div id="section3" className='max-w-[1000px] mx-auto my-0'>
            <div className='mt-[5rem]'>
                <div className='text-3xl font-bold text-center'>SKILL</div>
                <div className='text-gray-500 text-center'>taq</div>
            </div>
            <div className='flex justify-between'>
                <Tippy
                    trigger='click'
                    placement='right'
                    interactive
                    render={attrs => (
                        <div className=' ' tabIndex={-1} {...attrs}>
                        </div>
                    )}
                >
                    <div className='flex items-center w-[35%] justify-between px-4 py-2 bg-gray-300'>
                        <div>Front-end</div>
                        <div className='text-xl'><AiOutlineCaretDown /></div>
                    </div>
                </Tippy>
                <Tippy
                    trigger='click'
                    placement='right'
                    interactive
                    render={attrs => (
                        <div className=' ' tabIndex={-1} {...attrs}>
                        </div>
                    )}
                >
                    <div className='flex items-center w-[35%] justify-between px-4 py-2 bg-gray-300'>
                        <div>Soft skills</div>
                        <div className='text-xl'><AiOutlineCaretDown /></div>
                    </div>
                </Tippy>
            </div>
        </div>
    );
}
