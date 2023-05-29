import * as React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Link } from 'react-scroll';

const ItemsNav = [
  {
    key: "section1",
    title: "Home",
  },
  {
    key: "section2",
    title: "About",
  },
  {
    key: "section3",
    title: "Skills",
  },
  {
    key: "section4",
    title: "Services",
  },
  {
    key: "section5",
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
          <img className='h-[50px] p-1 rounded-full mr-3' src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/315425329_439798211645408_2859240164986267205_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=MKjhBDs_WaoAX-PfT6w&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAI0d2FR4cg3Sc4tlyyAcik9mqCiWoFzXe1OY_Kk4jfLQ&oe=6470883A" alt="" />
          <p className={` text-xl font-semibold ${isToggled ? 'text-yellow-200' : ''}`}>{language ? "Trịnh Anh Quốc" : "Trinh Anh Quoc"}</p>
        </div>
        <div className='flex items-center h-full w-[50%] justify-between'>
          {ItemsNav.map((item) => (
            <Link
              activeClass="active"
              to={item.key}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p id='{item.key}' key={item.key} className={`hover:text-red-500 cursor-pointer ${isToggled ? 'text-white' : ''}`}>{item.title}</p></Link>
          ))}
          <div className='cursor-pointer' onClick={onToggle}>{isToggled ? <BsFillSunFill className='text-yellow-400' /> : <BsFillMoonFill className='text-black' />}</div>
          <div className='cursor-pointer' onClick={setlanguage}>{language ? <p className=' px-3 py-1 rounded-md bg-blue-400 text-white'>ENG</p> : <p className='w-[56px] text-center px-3 py-1 rounded-md bg-blue-400 text-white'>VI</p>}</div>
        </div>
      </div>
    </div>
  );
}
