'use client';

const people = ['people-01.png', 'people-02.png', 'people-03.png']

const WorldCard = ({ img, title, position }) => (
    <div className={`absolute ${position} lg:w-[210px] w-[100px] lg:h-[160px] h-[100px] p-[6px] rounded-[32px] bg-[#5d6680]`}>
        <img src={img} className="w-full h-full rounded-[24px] object-cover" />
        <div className={`absolute top-1/2 flex flex-col px-2 object-fill`}>
            <span className="flex flex-row">
                {people.map((person) => (
                    <img src={person} key={person} className="lg:w-[24px] w-[12px] lg:h-[24px] h-[12px] object-contain" />
                ))}
                <p className="font-bold text-[10px] lg:text-[12px] text-[white] ml-1">+ 264 <span className="lg:inline hidden">has joined</span></p>
            </span>
            <h2 className="font-extrabold text-white lg:text-[20px] text-[8px]">{title}</h2>
        </div>
    </div>
)

export default WorldCard;