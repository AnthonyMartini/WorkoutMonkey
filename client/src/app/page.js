import Image from "next/image";
import Header from "../components/header"
import Consumption from "../components/Consumption";
import Diagram from "../components/Diagram"
import Workout from "../components/Workout";


export default function Home() {
  return (
    <div className='h-screen'>
      <Header />
      <div className=' min-h-[calc(100%-10px)] content-area bg-slate-200 w-full p-2'>
        <p className='text-[30px] font-bold text-slate-700'>Your Dashboard:</p>
        <div className='flex content-center w-full justify-center flex-wrap'>
          <Consumption />
          <Diagram />
          <Workout />
        </div>
      </div>


    </div>

  );
}
