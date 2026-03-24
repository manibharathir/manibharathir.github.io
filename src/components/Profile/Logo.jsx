import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {

    const [isOwner, setIsOwner] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = (e) => {
        console.log("isOwner",isOwner);
        if (e.shiftKey) {
            setIsOwner(true);
        }
    };

    const handlePrintResume = () => {
        navigate("/resume");
    };

    return (
        <>
            <div
                className="py-[15px] px-[20px] flex justify-between items-center"
                onClick={handleLogoClick}
            >
                <div className="logo_wrap relative h-[40px]">
                    <div className="logo_curve_bg1 absolute top-0 left-[35px]"></div>
                    <div className="logo_curve_bg2 absolute top-0 left-[4px]"></div>
                    <div className="logo absolute top-[0px] left-0 text-3xl">MBR</div>
                </div>
                <div className="flex items-center gap-2">
                    <a href={isOwner ? "Mani Bharathi Rajendran V2.pdf":"Mani Bharathi Rajendran.pdf"} download className="download-btn py-1 px-3 text-sm rounded-[4px] bg-black hover:bg-[#333] text-white no-underline">Download CV</a>

                    {isOwner && (
                        <button
                            onClick={handlePrintResume}
                            className="print-btn py-1 px-3 text-sm rounded bg-gray-700 hover:bg-gray-900 text-white"
                        >
                            Show
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}