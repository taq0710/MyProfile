import Button from 'components/button';
import * as React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaRegPaperPlane } from 'react-icons/fa';

export interface InfoProps {
    isToggled: boolean;
    language: boolean;
}

export default function Info(props: InfoProps) {
    const { isToggled, language } = props;
    const handleClick = (event: any) => {
        
    };
    return (
        <div className='max-w-[1000px] mx-auto my-0 flex justify-between p-3 mt-[5rem]'>
            <div className='mr-4'>
                <div className=' flex-col space-y-[20px]'>
                    <div className='text-2xl p-1.5 bg-blue-600 rounded-md'>{isToggled ? <FaFacebookF className='text-white' /> : <FaFacebookF className='text-white' />}</div>
                    <div className='text-4xl rounded-full bg'>{isToggled ? <AiFillGithub className='text-white' /> : <AiFillGithub />}</div>
                    <div className='text-2xl p-1.5 text-white bg-gradient-to-r from-igl to-igr rounded-lg'>{isToggled ? <BsInstagram className='' /> : <BsInstagram />}</div>
                </div>
            </div>
            <div className='flex-col space-y-[30px]'>
                <p className={`text-2xl font-medium ${isToggled ? 'text-white' : ''}`}>{language ? "Xin Chào, Tôi là Quốc!" : "Hello, My name is Quoc!"}</p>
                <p className={`text-justify ${isToggled ? 'text-white' : ''}`}>Front-End Developer</p>
                <p className={`text-justify ${isToggled ? 'text-white' : ''}`}>
                    {language ?<p className='font-semibold italic'>"Dừng lại là thất bại. Công nghệ là tương lai"</p> : <p className='font-semibold italic'>"Stopping is failure. Technology is future"</p>}
                </p>
                    <div>
                        <Button text="Contact Me" icon={<FaRegPaperPlane />} onClick={handleClick} />
                    </div>
            </div>
            <div className='w-[20rem]'><img className='rounded-lg' src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/320833408_1939569906247014_326945845671687597_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=rnLfigd2gvIAX-hEcfm&_nc_ht=scontent.fdad3-1.fna&oh=00_AfB5WchOW5TJBvo82_0az9mDlpgjTSqKJ8c9nMsEVqHAJw&oe=645A83C0" alt="" /></div>
        </div>
    );
}
