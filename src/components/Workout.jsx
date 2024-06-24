
import React, { useState, useEffect } from 'react';

export default function Workout() {

    const [data, setData] = useState(null);

    return (
        <div className='m-2 w-[600px] h-[600px] bg-slate-100 rounded-[20px] drop-shadow-xl'>

            <div className="w-full h-full p-2">
                <p className='font-bold text-stone-700 text-[24px] text-center w-full'> Today&apos;s Workout</p>
                <div>
                    <button

                        onClick={() =>
                            fetch('https://workout-monkey-backend.vercel.app/api/getAll')
                                .then(response => response.json())
                                .then(json => console.log(json))
                                .catch(error => console.error(error))

                        }
                    >
                        Hello!
                    </button>
                </div>
            </div>
        </div>

    )
}