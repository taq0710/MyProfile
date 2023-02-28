import React from 'react';

interface ItemPosts {
  topic: string;
  username: string;
  useid: string;
  status: string;
  imgulr: string;
  imgPosturl: string;
  comment: number;
  tweet: number;
  like: number;
  view: number;
  describe: string;
  following: number;
  follower: string;
}

interface ProfileInfoProps {
  itemposts: ItemPosts;
}

function ProfileInfo({ itemposts }: ProfileInfoProps) {
  return (
    <div className='bg-white w-72 rounded-lg shadow-boxsd' tabIndex={-1}>
      <div className='flex justify-between'>
        <img className='rounded-full p-3' src={itemposts.imgulr} alt="" />
        <div>
          <button className='flex border hover:bg-gray-700 border-black rounded-full bg-black text-white p-1 mt-3 mr-1'>
            <span className='py-1 px-4 text-xs font-bold'>Follow</span>
          </button>
        </div>
      </div>
      <div className='pl-3 pb-3'>
        <p className='text-xl font-bold hover:underline'>{itemposts.username}</p>
        <p className='pb-5'>{`@${itemposts.useid}`}</p>
        <p>{itemposts.describe}</p>
      </div>
      <div className='flex pl-3'>
        <div className='flex items-center hover:underline text-sm'>
          <p className='font-bold'>{itemposts.following}</p>
          <p className='pr-3'>Following</p>
        </div>
        <div className='flex items-center hover:underline text-sm'>
          <p className='font-bold'>{itemposts.follower}</p>
          <p className='pr-3'>Follower</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;