import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineTeam } from 'react-icons/ai';
import { AiFillHtml5 } from 'react-icons/ai';
import {BsCodeSlash} from 'react-icons/bs'
import { DiCss3, DiReact } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiNextdotjs } from 'react-icons/si';

export interface SkillsProps {
    isToggled: boolean;
}

const skillItems = [
    {
        key: 1,
        title: 'HTML',
        level: '50%',
        icon: <AiFillHtml5 />,
    },
    {
        key: 2,
        title: 'CSS',
        level: '80%',
        icon: <DiCss3 />,
    },
    {
        key: 3,
        title: 'Javascript',
        level: '80%',
        icon: <IoLogoJavascript />,
    },
    {
        key: 4,
        title: 'React',
        level: '80%',
        icon: <DiReact />,
    },
    {
        key: 5,
        title: 'Next.js',
        level: '80%',
        icon: <SiNextdotjs />,
    },
];

export default function Skills(props: SkillsProps) {
    const [iconOpen, setIconOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const handleShow = () => {
        setIconOpen(!iconOpen);
        setShowTooltip(true);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (
            tooltipRef.current &&
            !tooltipRef.current.contains(event.target as Node)
        ) {
            setShowTooltip(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const { isToggled } = props;

    return (
        <div id="section3" className="max-w-[1000px] mx-auto my-0 fl">
            <div className="mt-[5rem]">
                <div
                    className={`text-3xl font-bold text-center text-gray-600 ${isToggled ? 'text-yellow-200' : ''
                        }`}
                >
                    Skills
                </div>
                <div className="text-gray-500 text-center">My technical level</div>
            </div>
            <div className="flex justify-between">
                <div
                    ref={tooltipRef}
                    className={`w-[35%]`}
                    onClick={handleShow}
                >
                    <div className='flex items-center w-[full]'>
                        <div className='text-2xl w-[5%] text-blue-500'><BsCodeSlash/></div>
                        <div className="flex items-center w-[95%] justify-between px-4 py-2  cursor-pointer">
                            <div className='font-semibold text-lg'>Front-End</div>
                            <div className="text-xl">
                                {iconOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                            </div>
                        </div>
                    </div>
                    {showTooltip && (
                        <div className=" left-0 right-0 mt-2 bg-gray-400 text-white py-2 px-4 rounded-md">
                            {skillItems.map((items) => (
                                <div key={items.key} className="my-[1rem]">
                                    <div className="flex items-center mb-1.5">
                                        <div className={`${items.key === 1 ? 'text-[#ffa347]' : ''} ${items.key === 2 ? 'text-[#2D9CF4]' : ''} ${items.key === 3 ? 'text-yellow-500' : ''} ${items.key === 4 ? 'text-[#4285F4]' : ''} ${items.key === 3 ? 'text-yellow-500' : ''} mr-2 text-xl`}>
                                            {items.icon}
                                        </div>
                                        <div className={`${isToggled ? 'text-white' : ''}`}>
                                            {items.title}
                                        </div>
                                    </div>
                                    <div className="w-[20rem] bg-gray-300 h-[0.5rem] rounded-lg">
                                        <div className={`w-[${items.level}] bg-blue-500 h-[0.5rem] rounded-lg`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='w-[35%]'>
                    <div className='flex items-center w-full'>
                        <div className='text-2xl text-blue-500 w-[5%]'><AiOutlineTeam/></div>
                        <div className="flex items-center w-[95%] justify-between px-4 py-2">
                            <div>Soft skills</div>
                            <div className="text-xl">
                                <AiOutlineCaretDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
