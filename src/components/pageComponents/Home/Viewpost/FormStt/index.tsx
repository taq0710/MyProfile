import { useState, useRef } from 'react';
import { AiOutlineFileGif, AiOutlineCalendar } from 'react-icons/ai'
import { BiPoll, BiChevronDown } from 'react-icons/bi'
import { CiImageOn, CiLocationOn } from 'react-icons/ci'
import { GiEarthAmerica } from 'react-icons/gi'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { DropzoneOptions, useDropzone } from 'react-dropzone';
export interface FromsProps {

}
export default function Formstt(props: FromsProps) {
    const [showP, setShowP] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const buttonRef = useRef(null);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }
    const onDrop: DropzoneOptions['onDrop'] = (acceptedFiles) => {
        console.log('Accepted Files: ', acceptedFiles);
    };
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className="w-full flex flex-1 h-34 p-3 border-y">
            <img
                className="rounded-full h-12"
                src="https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png"
                alt=""
            />
            <div className="w-full">
                {showP && (
                    <p className="flex items-center pl-4 ml-5 border border-tweet rounded-full w-28 font-medium text-tweet text-base cursor-pointer hover:bg-hover">
                        Everyone <BiChevronDown />
                    </p>)}
                <form action="">
                    <input
                        className="h-10 text-xl::placeholder w-full p-4 focus:outline-none placeholder:text-xl"
                        type="text"
                        placeholder="What's happening?"
                        value={inputValue}
                        onFocus={() => setShowP(true)}
                        onBlur={() => setShowP(false)}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                    />
                </form>
                {showP && (

                    <p className="flex items-center w-44 ml-3 my-3 pl-2 font-medium text-tweet text-base hover:bg-hover rounded-full cursor-pointer">
                        <GiEarthAmerica className="mr-2" />
                        Everyone can reply
                    </p>)}
                <div className="flex justify-between">
                    <div className="flex p-4 ">
                        <div className='p-2 rounded-full hover:bg-hover' {...getRootProps()}>
                            <input {...getInputProps()} />
                            <CiImageOn className="cursor-pointer text-xl text-tweet hover:bg-hover rounded-full " />
                        </div>
                        <div className='p-2 rounded-full hover:bg-hover'><AiOutlineFileGif className="cursor-pointer text-xl text-tweet" /></div>
                        <div className='p-2 rounded-full hover:bg-hover'><BiPoll className="cursor-pointer text-xl text-tweet" /></div>
                        <div className='p-2 rounded-full hover:bg-hover'><RiEmotionHappyLine className="cursor-pointer text-xl text-tweet" /></div>
                        <div className='p-2 rounded-full hover:bg-hover'><AiOutlineCalendar className="cursor-pointer text-xl text-tweet" /></div>
                        <div className='p-2 rounded-full hover:bg-hover'><CiLocationOn className="cursor-pointer text-xl text-tweet" /></div>
                    </div>
                    <button
                        ref={buttonRef}
                        disabled={!inputValue.trim()}
                        className="bg-dftweet mr-3 w-16 h-9 text-slate-50 font-bold rounded-full">
                        Tweet
                    </button>
                </div>


            </div>
        </div>
    );
}