import * as React from 'react';
import * as Progress from '@radix-ui/react-progress';



export default function Consumption({ cal, calGoal, prot, protGoal }) {

    return (
        <div className='m-2 w-500px h-[600px] bg-slate-100 rounded-[20px] drop-shadow-xl'>

            <div className="w-full h-full p-2">
                <p className='font-bold text-stone-700 text-[24px] text-center w-full'>Consumption Info</p>
                <p className='font-bold text-stone-700 text-[18px]'>Calories - {cal}cal/{calGoal}Kcal</p>
                <Progress.Root value={cal / calGoal} className='w-[600px] h-[40px] rounded-[9999px] border-black border-2 bg-slate-200 relative overflow-hidden'>
                    <Progress.Indicator className="bg-gradient-to-r from-orange-400 to-red-600 h-full w-full"
                        style={{ transform: `translateX(-${100 - ((cal / calGoal) * 100)}%)` }} >
                        <p>{cal / calGoal}</p>
                    </Progress.Indicator>

                </Progress.Root>
                <p className='font-bold text-stone-700 text-[18px]'>Protein - {prot}g/{protGoal}g</p>
                <Progress.Root value={prot / protGoal} className='w-[600px] h-[40px] rounded-[9999px] border-black border-2 bg-slate-200 relative overflow-hidden'>
                    <Progress.Indicator className="bg-gradient-to-r from-cyan-400 to-blue-600 h-full w-full"
                        style={{ transform: `translateX(-${100 - ((prot / protGoal) * 100)}%)` }} />
                </Progress.Root>
                <div>
                    Buttons Go Here
                </div>
            </div>
        </div>

    )
}