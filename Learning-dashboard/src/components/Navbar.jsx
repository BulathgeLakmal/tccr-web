import React from 'react'
import toggleSidebarSlice from '../reducers/toggleSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  //dispatch 
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.LoginReducer)

  const toggle = () => {
    dispatch(toggleSidebarSlice.actions.toggleSidebar())
  }
  return (
    <div className='lg:hidden min-[320px]:flex'>
      <div className="fixed h-[50px] w-full bg-blue z-20">
        <div className="md:space-x-6 flex mx-8 items-center justify-between">
          <div className=''>
            <Link to="/home"><h1 className='font-filson text-[28px] text-white'>EDUCA</h1></Link>
          </div>
          {/* <div className="items-center flex min-[320px]:mr-8 lg:mr-0 ">
                  <img src="./assets/icon-profile.png" className="object-cover w-[30px] h-[30px]" alt="" />
                  <p className="font-semibold text-sm text-white font-filson">{userData.username}
                  </p>
                </div> */}

        </div>
        <div>
          <button onClick={toggle} className='absolute top-2 right-3 lg:hidden md:flex sm:flex min-[32px]:flex'>
            <img src="../assets/icon-menu.png" alt="" className='w-[30px] h-[30px]' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar