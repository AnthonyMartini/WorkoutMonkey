import Image from 'next/image'

export default function Header() {

    return (
        <div className='w-full h-[100px] bg-slate-900 content-center p-2 flex '>
            <Image src={require('..//img/Icon.png')} alt="Logo" className="w-[80px] h-[80px] mx-4" />
            <p className="text-[36px] font-bold text-slate-300 content-center">Gym Monkey Fitness Tracker</p>
            <p className="text-[18px] font-bold text-slate-300 content-end pl-2">By Gym Monkies &#128018;</p>

        </div>

    )
}