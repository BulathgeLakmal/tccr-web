import React from 'react'

const Dashboard = () => {
  return (

        <div>
          <div className='flex flex-col'>

            <div className='flex flex-wrap items-center justify-center gap-10 mt-4 lg:ml-40'>
                    {/* <div><img src="./assets/wavesOpacity.svg" alt="" className='lg:flex min-[320px]:hidden w-full h-[100px]' /></div> */}
                                <div className='flex items-center justify-center border-b-8 w-full border-purple shadow-xl shadow -blue'>
                                    <h2 className='text-blue/80 text-filson lg:text-[40px] min-[320px]:text-[28px] font-bold '>Welcome EDUCA!</h2>
                                </div>
            </div>
          </div>
        </div>
  )
}

export default Dashboard
