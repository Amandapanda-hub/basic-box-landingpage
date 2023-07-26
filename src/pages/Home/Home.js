import React from 'react'

export default function Home() {
    return (
      <div className="flex flex-col sm:flex-row justify-center items-center h-screen space-y-6 sm:space-y-0 sm:space-x-20 p-8 sm:p-4">
        <div className="flex justify-center items-center rounded w-full sm:w-1/2 h-1/2 sm:h-auto">
          <img src="https://images.unsplash.com/photo-1603625354572-83f7a0c498a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE2fHxib2F0c3xlbnwxfHx8fDE2OTAyODk3NTJ8MA&ixlib=rb-4.0.3&q=80&w=1000" alt="logo" 
          className="object-contain w-full h-full"/>
        </div>
        <div className="flex flex-col justify-between p-4 rounded w-full space-y-2 lg:space-y-[5rem] md:space-y-[4rem] sm:space-y-[8rem] sm:w-1/3 lg:w-1/3 h-1/2 sm:h-auto">
          <div className=''>
            <h1 className="text-5xl sm:text-6xl mb-8">Opening Soon.</h1>
            <p className="mb-12 text-2lg sm:text-3xl">Our Watercraft Emporium is opening this Spring. Sign up with your email address to get notified.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <input
              type="email"
              className="border py-4 px-2 w-full sm:w-3/4 hover:border-[#006299]"
              placeholder="Email"
            />
            <button 
            className="border border-[#006299] bg-transparent hover:bg-[#1481BF] hover:bg-opacity-80 hover:text-white text-[#006299] font-bold py-4 sm:px-6 md:px-3 rounded w-full sm:w-1/4 mt-4 sm:mt-0">
              Sign Up
            </button>
          </div>
          <div className="flex justify-center sm:justify-start items-start space-x-[2rem] sm:space-x-[8rem] mt-10 sm:mt-6 pt-10 pb-10 sm:pt-0 sm:pb-0"> 
            <div>
              <h3 className="text-2xl font-semibold mb-4">Location</h3>
              <p className="whitespace-nowrap">123 Fake St</p> 
              <p className='whitespace-nowrap'>Fake City, Earth 1234</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="whitespace-nowrap">shippingmail@example.com</p>
              <p>(555) 555-5555</p>
            </div>
          </div>
        </div>
      </div>
    )
}
