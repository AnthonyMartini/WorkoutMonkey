import * as React from 'react';
import * as Progress from '@radix-ui/react-progress';
import Body from "./image"
export default function Consumption() {

    return (
        <div className='m-2 w-600px h-[600px] bg-slate-100 rounded-[20px] drop-shadow-xl'>

            <div className="w-full h-full p-2">
                <p className='font-bold text-stone-700 text-[24px] text-center w-full'> Body Diagram</p>
                <Body />
                <div>
                    Buttons Go Here
                </div>
            </div>
        </div>

    )
}