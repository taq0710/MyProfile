import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, addPostSuccess, selectPosts, editPost } from 'features/post/postSlide';
import { uploadImage, selectAllImage } from 'features/upload/uploadSlide';
import { AiOutlineFileGif, AiOutlineCalendar } from 'react-icons/ai'
import { BiPoll, BiChevronDown } from 'react-icons/bi'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { CiImageOn, CiLocationOn } from 'react-icons/ci'
import { GiEarthAmerica } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import Tippy from '@tippyjs/react/headless';
import { Post } from 'interfaces';

export interface FromsProps {
    onSubmit: (status: string) => void;
}
export default function Formstt(props: FromsProps) {
    const [showP, setShowP] = useState(false);
    const [status, setStatus] = useState('');
    const [selectedFile, setSelectedFile] = useState<File>();
    const [imageUrl, setImageUrl] = useState<string>();
    const buttonRef = useRef(null);
    const dispatch = useDispatch();
    const imageURL = useSelector(selectAllImage)
    const postselec = useSelector(selectPosts)
    useEffect(() => {
        if (postselec) {
            setStatus(postselec.status)
            setImageUrl(postselec.image)
        }
    }, [postselec])
    // dùng useSelector lấy cái editPost ra check nếu tồn tại thì dán dô

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    }

    const onDrop: DropzoneOptions['onDrop'] = (acceptedFiles: any) => {
        setSelectedFile(acceptedFiles[0]);
        const fileUrl = URL.createObjectURL(acceptedFiles[0]);
        setImageUrl(fileUrl);
        dispatch(uploadImage(acceptedFiles[0]));
    };

    const handleCancelImage = () => {
        setSelectedFile(undefined);
        setImageUrl(undefined);
    };

    useEffect(() => {
    }, [selectedFile]);
    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: true });

    const handlePost = () => {
        const newPost: Post = {
            _id: postselec?._id,
            status: status,
            image: imageURL[0] || postselec?.image,
            topic: "You might like",
            userName: "useName",
            userId: 1,
            hashtag: "#abc"

        }

        if (postselec) {
            dispatch(editPost(newPost))
        } else {
            dispatch(addPost(newPost))
        }
        setStatus('');
        setSelectedFile(undefined)
        setImageUrl(undefined);

    }

    return (
        <>
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
                    <form onSubmit={handlePost}>
                        <input
                            className="h-10 text-xl::placeholder w-full p-4 focus:outline-none placeholder:text-xl"
                            type="text"
                            placeholder="What's happening?"
                            value={status}
                            onFocus={() => setShowP(true)}
                            onChange={handleInputChange}
                        />
                        {showP && (

                            <Tippy
                                placement='bottom'
                                interactive
                                delay={200}
                                render={attrs => (
                                    <div className='' tabIndex={-1} {...attrs}>
                                        <div className='bg-white w-72 rounded-lg shadow-boxsd' tabIndex={-1}>
                                            <div className='p-4'>
                                                <p className='text-xl font-medium mb-3'>Choose audience</p>
                                                <div className=''>
                                                    <div className='flex items-center mb-3'>
                                                        <div className='p-3 rounded-full bg-tweet text-white mr-3'>
                                                            <GiEarthAmerica />
                                                        </div>
                                                        <p className='font-medium'>Everyone</p>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <div className='p-3 rounded-full bg-hover2 text-white mr-3'><BsFillPersonCheckFill /></div>
                                                        <div>
                                                            <p className='font-medium'>Twitter Circle</p>
                                                            <div className='flex items-center'>
                                                                <p className='mr-1'>0</p>
                                                                <p className='mr-2 text-gray-500'> People</p>
                                                                <p className='font-medium underline'>Edit</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}>
                                <p className="flex items-center w-44 ml-3 my-3 pl-2 font-medium text-tweet text-base hover:bg-hover rounded-full cursor-pointer">
                                    <GiEarthAmerica className="mr-2" />
                                    Everyone can reply
                                </p>
                            </Tippy>)}
                        <div>
                            {imageUrl ? (
                                <button onClick={handleCancelImage}>
                                    <GrClose />
                                </button>
                            ) : null}
                            {imageUrl && (
                                <img
                                    className="my-3 max-h-96"
                                    src={imageUrl}
                                    alt="Selected file"
                                />
                            )}
                        </div>
                        <div className="flex justify-between pt-4">
                            <div className="flex ">
                                <Tippy
                                    placement='bottom'
                                    delay={200}
                                    render={attrs => (
                                        <div className='' tabIndex={-1} {...attrs}>
                                            <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Media</p></div>
                                        </div>
                                    )}>
                                    <div className='p-2 rounded-full hover:bg-hover' {...getRootProps()}>
                                        <input type='file' {...getInputProps()} />
                                        <CiImageOn className="cursor-pointer text-xl text-tweet hover:bg-hover rounded-full " />
                                    </div>
                                </Tippy>
                                <Tippy
                                    placement='bottom'
                                    delay={200}
                                    render={attrs => (
                                        <div className='' tabIndex={-1} {...attrs}>
                                            <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Gif</p></div>
                                        </div>
                                    )}>
                                    <div className='p-2 rounded-full hover:bg-hover'>
                                        <AiOutlineFileGif className="cursor-pointer text-xl text-tweet" />
                                    </div></Tippy>
                                <Tippy
                                    placement='bottom'
                                    delay={200}
                                    render={attrs => (
                                        <div className='' tabIndex={-1} {...attrs}>
                                            <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Poll</p></div>
                                        </div>
                                    )}>
                                    <div className='p-2 rounded-full hover:bg-hover'>
                                        <BiPoll className="cursor-pointer text-xl text-tweet" />
                                    </div>
                                </Tippy>
                                <Tippy
                                    placement='bottom'
                                    delay={200}
                                    render={attrs => (
                                        <div className='' tabIndex={-1} {...attrs}>
                                            <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Emoji</p></div>
                                        </div>
                                    )}>
                                    <div className='p-2 rounded-full hover:bg-hover'>
                                        <RiEmotionHappyLine className="cursor-pointer text-xl text-tweet" />
                                    </div>
                                </Tippy>
                                <Tippy
                                    placement='bottom'
                                    delay={200}
                                    render={attrs => (
                                        <div className='' tabIndex={-1} {...attrs}>
                                            <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Schedule</p></div>
                                        </div>
                                    )}>
                                    <div className='p-2 rounded-full hover:bg-hover'>
                                        <AiOutlineCalendar className="cursor-pointer text-xl text-tweet" />
                                    </div>
                                </Tippy>

                                <div className='p-2 '>
                                    <CiLocationOn className="cursor-pointer text-xl text-tweet" />
                                </div>

                            </div>
                            <button
                                ref={buttonRef}
                                disabled={!status.trim()}
                                className={`bg-dftweet mr-3 w-16 h-8 text-slate-50 font-bold text-sm rounded-full ${status.trim() ? 'bg-tweet' : ''}`}>
                                Tweet
                            </button>
                        </div>


                    </form>
                </div>
            </div>

        </>
    );
}
