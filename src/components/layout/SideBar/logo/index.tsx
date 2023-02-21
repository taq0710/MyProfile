import { BsTwitter } from "react-icons/bs"
function Logo() {
    return (
        <div className="text-3xl py-3 ml-2 cursor-pointer ">
            <div className="w-10 rounded-full hover:bg-cyan-50"><BsTwitter color="rgb(29, 155, 240)" /></div>
        </div>
    );
}

export default Logo;