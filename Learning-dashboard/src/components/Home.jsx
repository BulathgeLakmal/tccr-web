import React from 'react'
import Course3 from './Course3'
// import Tutors from './Tutors'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col'>
        {/* cards start */}
        <div>
          <Dashboard />
        </div>
        {/* cards end  */}


        {/* course start */}
        <div className='mt-[-40px]'>
          <Course3 />
        </div>
        {/* course end  */}

        {/* tutors start  */}
        {/* <div>
          <Tutors />
        </div> */}
        {/* tutors end  */}
      </div>

      <div>
        <Routes>
          <Route path='/dashboardHome' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home
