'use client';


const ImgForWorld = ({ img, position }) => (
    <div
        className={`absolute ${position} lg:w-[80px] w-[40px] lg:h-[70px] h-[35px] p-[6px] rounded-full bg-[#5d6680]`}
    >
        <img
            src={img}
            alt="people"
            className="w-full h-full"
        />
        <div className="diamond lg:translate-x-[18px]" />
    </div>
)

export default ImgForWorld;