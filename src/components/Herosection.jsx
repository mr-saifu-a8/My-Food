import React from 'react'
import { useNavigate } from 'react-router-dom';


function Herosection() {
  const navigate = useNavigate()
  return (
    <div className="flex h-[90vh] bg-[#647403]">
      <div className="flex flex-col gap-5 px-25 py-20 text-white">
        <h1 className='text-9xl leading-[.8] font-["synebold"]'>
          Brownie Magic
        </h1>
        <div className='w-[85%] text-4xl font-["synebold"]'>
          <p>
            5 tips how to make <br /> the best brownies in the game
          </p>
          <br />
          <hr className="text-[#E4D8AB]" />
        </div>
        <div className='flex justify-between text-[#E4D8AB] w-[80%] font-["synebold"]'>
          <div className="flex gap-3 text-[2vh]">
            <button className="border px-3 py-1.5 rounded-full">Home to</button>
            <button className="border px-3 py-1.5 rounded-full">Baking</button>
          </div>
          <div>
            <h3>12 min read</h3>
          </div>
        </div>
        <div>
          <button onClick={()=> navigate(`/recipes`)} className='cursor-pointer font-["synebold"] uppercase rounded-full px-6 text-[2.2vh] mt-8 py-2 bg-black text-[#E4D8AB]'>
            read now
          </button>
        </div>
      </div>
      <div className="">
        <img className="rounded-full" src="/src/assets/img1.jpg" alt="" />
      </div>
    </div>
  );
}

export default Herosection