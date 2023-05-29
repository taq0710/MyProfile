import Button from 'components/button';
import * as React from 'react';
import { AiOutlineDownload } from 'react-icons/ai'
export interface AboutProps {
    isToggled: boolean;
    language: boolean;
}
const ItemsAbout = [
    {
        key: "+01",
        title: "Year experience",
        titlevn: "Năm kinh nghiệm"
    },
    {
        key: "+03",
        title: "Completed project",
        titlevn: "Dự án đã hoàn thành"
    },
    {
        key: "+01",
        title: "Companies worked",
        titlevn: "Công ty dã làm việc"
    }
]
export default function About(props: AboutProps) {
    const { isToggled, language } = props
    return (
        <div id="section2" className='max-w-[1000px] mx-auto my-0'>
            <div className={`text-3xl font-bold flex justify-center mt-[5rem] mb-[10px] text-gray-600 ${isToggled?"text-yellow-200":""}`}>
                About
            </div>
            <div className='text-center mb-[5rem] text-gray-500'>My introduction</div>
            <div className='flex justify-between items-center'>
                <div className='w-[45%]' ><img className='rounded-full' src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/348306014_1389890508443010_5878449373677053063_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bAUG1mos5m8AX_gDLMC&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBtALqj3HCsWwrZcy9025sfHr2Oa998USeFf6bQnOJqTg&oe=64705C15" alt="" /></div>
                <div className={`text-justify w-[50%] ${isToggled ? "text-white" : ""}`}>{language
                    ?
                    "Tôi là một Frontend Developer với hơn 1 năm kinh nghiệm trong việc phát triển các ứng dụng web động. Tôi có kiến thức chuyên sâu về HTML, CSS, JavaScript, TypeScript đặc biệt là framework như React. Tôi cũng có kinh nghiệm trong việc sử dụng các thư viện design như: Tailwindcss, Bootstrap.... Tôi cũng có kinh nghiệm trong việc làm việc với các công cụ quản lý mã như Git và các nền tảng quản lý dự án như JIRA. Ngoài ra, tôi còn có khả năng tốt trong việc giải quyết vấn đề, tư duy logic và làm việc độc lập. Tôi luôn nỗ lực học hỏi và cập nhật kiến thức mới nhằm đáp ứng nhu cầu phát triển của các dự án và đưa ra các giải pháp tốt nhất."
                    :
                    "I am a Frontend Developer with over 1 year of experience in developing dynamic web applications. I have in-depth knowledge of HTML, CSS, JavaScript, TypeScript especially frameworks like React. I also have experience in using design libraries such as: Tailwindcss, Bootstrap.... I also have experience in working with code management tools like Git and project management platforms like JIRA. In addition, I have good ability in problem solving, logical thinking and working independently. I always strive to learn and update new knowledge to meet the development needs of projects and provide the best solutions."}
                    <div className='flex items-center justify-between mt-[2rem]'>
                        {ItemsAbout.map((item) => (
                            <div>
                                <div className='text-center'>{item.key}</div>
                                <div>{language ? <p>{item.titlevn}</p> : <p>{item.title}</p>}</div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-[2rem] flex justify-center'><Button text='MyCV' icon={<AiOutlineDownload />} /></div>
                </div>
            </div>
        </div>
    );
}
