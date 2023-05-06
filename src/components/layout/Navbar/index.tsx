import * as React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ItemsNav = [
  {
    key: 1,
    title: "Home",
  },
  {
    key: 2,
    title: "About",
  },
  {
    key: 3,
    title: "Skills",
  },
  {
    key: 4,
    title: "Services",
  },
  {
    key: 5,
    title: "Contact Me",
  },
]
export interface NavBarProps {
  isToggled: boolean;
  onToggle: () => void;
  language: boolean;
  setlanguage: () => void;
}
export default function NavBar(props: NavBarProps) {
  const { isToggled, onToggle, language, setlanguage } = props;
  return (
    <div>
      <div className='h-[50px] max-w-[1000px] mx-auto my-0 flex items-start justify-between'>
        <div className='flex items-center h-full w-[30%]'>
          <img className='h-[50px] p-1 rounded-full mr-3' src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/330332614_943204960202084_108585497636149841_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8rkwOl5NsxEAX-QrExV&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBDFdIDyVSw7HETFV5-UFsJjVHhCKBXMPeJ5J_npvbhjQ&oe=645B55F3" alt="" />
          <p className={` text-xl font-semibold ${isToggled ? 'text-white' : ''}`}>{language?"Trinh Anh Quoc":"Trịnh Anh Quốc"}</p>
        </div>
        <div className='flex items-center h-full w-[50%] justify-between'>
          {ItemsNav.map((item) => (
            <p key={item.key} className={`hover:text-red-500 cursor-pointer ${isToggled ? 'text-white' : ''}`}>{item.title}</p>
          ))}
          <div className='cursor-pointer' onClick={onToggle}>{isToggled ? <BsFillSunFill className='text-yellow-400' /> : <BsFillMoonFill className='text-black' />}</div>
          <div className='cursor-pointer' onClick={setlanguage}>{language ? <p className='w-[56px] text-center px-3 py-1 rounded-md bg-blue-400 text-white'>VI</p> : <p className=' px-3 py-1 rounded-md bg-blue-400 text-white'>ENG</p>}</div>
        </div>
      </div>
    </div>
  );
}
