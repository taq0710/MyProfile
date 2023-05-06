import * as React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export interface InfoProps {
    isToggled: boolean;
    language:boolean;
}

export default function Info(props: InfoProps) {
    const { isToggled,language } = props;
    return (
        <div className='max-w-[1000px] mx-auto my-0 flex p-3'>
            <div className='mr-4'>
                <div className=' flex-col space-y-[20px]'>
                    <div className='text-2xl p-1.5 bg-blue-600 rounded-md'>{isToggled ? <FaFacebookF className='text-white' /> : <FaFacebookF className='text-white' />}</div>
                    <div className='text-4xl rounded-full bg'>{isToggled ? <AiFillGithub className='text-white' /> : <AiFillGithub />}</div>
                    <div className='text-2xl p-1.5 text-white bg-gradient-to-r from-igl to-igr rounded-lg'>{isToggled ? <BsInstagram className='' /> : <BsInstagram />}</div>
                </div>
            </div>
            <div className='flex-col space-y-[20px]'>
                <p className={`text-2xl font-medium ${isToggled ? 'text-white' : ''}`}>{language?"Hello, My name is Quoc!":"Xin Chào, Tôi là Quốc!"}</p>
                <p className={`text-justify ${isToggled ? 'text-white' : ''}`}>Front-End Developer</p>
                <p className={`text-justify ${isToggled ? 'text-white' : ''}`}>{language?"I am a Frontend Developer with over 1 year of experience in developing dynamic web applications. I have in-depth knowledge of HTML, CSS, JavaScript, TypeScript especially frameworks like React. I also have experience in using design libraries such as: Tailwindcss, Bootstrap... . I also have experience in working with code management tools like Git and project management platforms like JIRA. In addition, I have good ability in problem solving, logical thinking and working independently. I always strive to learn and update new knowledge to meet the development needs of projects and provide the best solutions.":"Tôi là một Frontend Developer với hơn 1 năm kinh nghiệm trong việc phát triển các ứng dụng web động. Tôi có kiến thức chuyên sâu về HTML, CSS, JavaScript, TypeScript đặc biệt là framework như React. Tôi cũng có kinh nghiệm trong việc sử dụng các thư viện design như: Tailwindcss, Bootstrap... . Tôi cũng có kinh nghiệm trong việc làm việc với các công cụ quản lý mã như Git và các nền tảng quản lý dự án như JIRA. Ngoài ra, tôi còn có khả năng tốt trong việc giải quyết vấn đề, tư duy logic và làm việc độc lập. Tôi luôn nỗ lực học hỏi và cập nhật kiến thức mới nhằm đáp ứng nhu cầu phát triển của các dự án và đưa ra các giải pháp tốt nhất."}</p>
            </div>
        </div>
    );
}
