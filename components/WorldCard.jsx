'use client';

const people = ['people-01.png', 'people-02.png', 'people-03.png']

const WorldCard = ({ img, title, position }) => (
    <div className={`absolute ${position} w-[210px] h-[160px] p-[6px] rounded-[32px] bg-[#5d6680]`}>
        <img src={img} className="w-full h-full rounded-[24px]" />
        {people.map(person => (
            <img src={person} key={person} className="w-[24px] h-[24px]" />
        ))}
    </div>
)

export default WorldCard;