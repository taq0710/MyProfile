import { IoIosMore } from "react-icons/io"
function User() {
    return (
        <div className="pb-4">
            <div className=" hover:bg-gray-100 rounded-full p-2 ">
                <div className="flex items-center pr-4">
                    <img className="rounded-full " src="https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png" alt="" />
                    <div className="mx-4">
                        <p className="text-xs font-bold">Quốc Trinh Anh</p>
                        <p className="text-xs">@QucTrnhAnh1</p>
                    </div>
                    <IoIosMore className="pl-3 text-3xl"/>
                </div>
            </div>
        </div >
    );
}

export default User;