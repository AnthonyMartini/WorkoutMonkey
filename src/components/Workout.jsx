
import { stringify } from 'postcss';
import React, { useState, useEffect } from 'react';

export default function Workout() {

    const [data, setData] = useState([]);
    console.log(data)
    return (
        <div className='m-2 w-[600px] h-[600px] bg-slate-100 rounded-[20px] drop-shadow-xl'>

            <div className="w-full h-full p-2">
                <p className='font-bold text-stone-700 text-[24px] text-center w-full'> Today&apos;s Workout</p>

                <div>


                    <button

                        onClick={() => {
                            const url = 'https://workout-monkey-backend.vercel.app/api/getWorkouts';


                            fetch(url)
                                .then(response => {
                                    return response.json();
                                })
                                .then((data) => {
                                    this.setData({
                                        items: data.map(item => ({
                                            title: item.title,
                                            url: item.url,
                                            descrip: item.bite,
                                        })
                                        )
                                    });
                                    console.log(data[i])

                                })
                        }}
                    >
                        Hello!
                    </button>
                </div>
                <div>
                    {data}
                    <h1>Available Workouts:</h1>
                    {data?.map((item) => (
                        <p>{item.name}</p>
                    ))
                    }
                </div>
            </div>
        </div >

    )
}