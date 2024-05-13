import React from 'react'
import { MovingBorderDemo } from './border'
import Image from 'next/image'
import { StickyScrollRevealDemo } from './StickyScroll'
import { listOfImgs } from '@/constants/listOfImgs'

const LandingPage = () => {
  return (
    <section className=' flex flex-col items-center py-10'>
        <MovingBorderDemo/>
        <h1 className=" text-4xl font-bold ">Cyph Infinite Scale</h1>
      <p className=" w-[360px] mb-5">
        The new and most secure version of ownCloud real-time content
        collaboration platform.
      </p>

      <button className=" text-lg rounded-md bg-[#706f6f33] px-6 py-2">
        Get Started
      </button>

      <Image src={"/Home-UI.png"} width={1300} height={600} alt="" />

      {/* <StickyScrollRevealDemo/> */}

      {listOfImgs.map((list, index)=> (
        <div className=' grid grid-cols-2 w-[90%] grid-rows-1 gap-x-10 justify-items-center mt-16'>
            <div className=' col-span-1 mt-5'>
                <h1 className=' text-center font-bold text-2xl'>{list.title}</h1>
                <p>{list.description}</p>
            </div>

            <div className=' col-auto'>
                {list.content}
            </div>
        </div>
      ))}
    </section>
  )
}

export default LandingPage