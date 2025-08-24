export default function Logo() {
    return (
        <div className='py-[15px] px-[20px] flex justify-between items-center'>
            <div className="logo_wrap relative h-[40px]">
                <div className="logo_curve_bg1 absolute top-0 left-[35px]"></div>
                <div className="logo_curve_bg2 absolute top-0 left-[4px]"></div>
                <div className="logo absolute top-[0px] left-0 text-3xl">MBR</div>
            </div>
            <div className="">
                <a href="Mani Bharathi Rajendran.pdf" download class="download-btn py-1 px-3 text-sm rounded-[4px] bg-black hover:bg-[#333] text-white no-underline">Download CV</a>
            </div>
        </div>
    )
}