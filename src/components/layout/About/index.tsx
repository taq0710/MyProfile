import * as React from 'react';

export interface AboutProps {
    isToggled: boolean;
    language: boolean;
}

export default function About(props: AboutProps) {
    const { isToggled, language } = props
    return (
        <div className='max-w-[1000px] mx-auto my-0'>
            <div className='text-3xl flex justify-center'>
                About
            </div>
            <div className='flex'>
                <div><img className='w-[50%]' src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/315425329_439798211645408_2859240164986267205_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=XhrWvUTE9gcAX_TaL6G&_nc_ht=scontent.fdad3-6.fna&oh=00_AfBQviVvCCpzqoGrAYq8EN-bYESMMFqfyv7liUqD5YngNA&oe=645AC77A" alt="" /></div>
                <div>{language ? "I have been trained in web programming skills.Built small projects with reactjs, nextjs, typescript" : "Tôi đã được đào tạo kỹ năng về lập trình web. Đã được xây dựng các dự án nhỏ với reactjs, nextjs, typescript"}</div>
            </div>
        </div>
    );
}
