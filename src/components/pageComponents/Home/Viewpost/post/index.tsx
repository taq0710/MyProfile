import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { MdComment } from 'react-icons/md'
import { BsDot, BsUpload } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { FiMoreHorizontal, FiBarChart2 } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { TiTick } from 'react-icons/ti'
export interface PostsProps { }

const itemposts = [
    {
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },
    {
        topic: "You might like",
        username: "Anh Quốc",
        useid: "anhquoc",
        status: "send to life",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },
    {
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },
    {
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },
    {
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },{
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },{
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },{
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },{
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53
    },
]
export default function Posts(props: PostsProps) {
    return (
        <>
            {itemposts.map((itemposts, index) => (
                <div className='cursor-pointer hover:bg-gray-100 border-b' key={index}>
                    <div className='flex items-center w-full justify-between'>
                        <div className='flex items-center mt-1 w-10/12'>
                            <div className='ml-10 mr-3'><MdComment className='text-gray-500 cursor-pointer' /></div>
                            <div >
                                <p className='text-sm font-bold text-gray-500 hover:underline cursor-pointer'>
                                    {itemposts.topic}
                                </p>
                            </div>
                            <div><BsDot /></div>
                            <div className='flex items-center  w-8/12 justify-between'>
                                <p className='text-tweet text-sm font-medium hover:underline cursor-pointer'>
                                    See more
                                </p>
                            </div>
                        </div>
                        <div className='hover:bg-hover mr-1 rounded-full p-2'><IoClose className=' text-xl cursor-pointer text-gray-500' /></div>
                    </div>
                    <div className='flex w-full'>
                        <div>
                            <img className='rounded-full mt-2 ml-3' src={itemposts.imgulr} alt="" />
                        </div>
                        <div className='pl-2 w-11/12 '>
                            <div className='flex items-center w-full justify-between'>
                                <div className='flex items-center'>
                                    <p className='font-bold text-username hover:underline'>{itemposts.username}</p>
                                    <div className='p-tick mx-1 rounded-full bg-tweet'>
                                        <TiTick className='text-gray-50 text-xs' />
                                    </div>
                                    <p className='text-gray-500'>{`@${itemposts.useid}`}</p>
                                    <div className='text-gray-500'><BsDot /></div>
                                    <p className='text-gray-500 hover:underline'>1h</p>
                                </div>
                                <div className='mr-1 hover:bg-hover rounded-full p-2'><FiMoreHorizontal className=' text-xl' /></div>
                            </div>
                            <div className='flex pr-5 mb-3'>
                                <p className='text-justify'>
                                    {itemposts.status}
                                </p>
                            </div>
                            <div className='mr-4'>
                                <img className='rounded-2xl' src={itemposts.imgPosturl} alt="" />
                                <p className='text-sm text-gray-500'>from</p>
                                <div className='w-9/12 flex items-center justify-between text-gray-500'>
                                    <div className='flex items-center hover:text-tweet '><span className='p-2 hover:bg-hover rounded-full'><FaRegComment /></span> {itemposts.comment} </div>
                                    <div className='flex items-center hover:text-hover2'><span className='p-2 hover:bg-hover2bg rounded-full'><AiOutlineRetweet /></span> {itemposts.tweet} </div>
                                    <div className='flex items-center hover:text-hover3'><span className='p-2 hover:bg-hover3bg rounded-full'><AiOutlineHeart /></span> {itemposts.like} </div>
                                    <div className='flex items-center hover:text-tweet'><span className='p-2 hover:bg-hover rounded-full'><FiBarChart2 /></span> {itemposts.view} </div>
                                    <div className='flex items-center hover:text-tweet'><span><BsUpload /></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}

