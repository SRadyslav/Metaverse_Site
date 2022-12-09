'use client';

const ImgForWorld = ({img, position}) => (
    <div
        className={`absolute ${position} w-[80px] h-[70px] p-[6px] rounded-full bg-[#5d6680]`}
    >
        <img
            src={img}
            alt="people"
            className="w-full h-full"
        />
    </div>
)

export default ImgForWorld;