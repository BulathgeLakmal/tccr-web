import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import toggleSidebarSlice from '../reducers/toggleSidebar';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const userData = useSelector((state) => state.LoginReducer)

    //dispatch
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebarSlice.actions.toggleSidebar())
    }

    const toggleSidebar = useSelector((state) => state.toggleSidebarReducer)

    return (
        <div>
            {/* mobile Sidebar */}
            {!toggleSidebar.toggleSidebar &&
                <div className="fixed lg:hidden md:flex sm:fixed z-10 h-[100%] w-40">
                    <div
                        className='flex flex-col h-[100%] p-3 bg-blue relative top-4 shadow duration-300'
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between mt-2 mb-10">

                                {/* <div>
                                <Link to="/home"><h1 className='font-filson text-[30px] text-white'>EDUCA</h1></Link>
                            </div> */}

                                <div onClick={toggle} className='absolute top-10 right-1'>
                                    <img src="../assets/icon-close.png" alt="" className='w-[30px] h-[30px]' />
                                </div>
                            </div>
                            {/* <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center py-4">
                                <button
                                    type="submit"
                                    className="p-2 focus:outline-none focus:ring"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                name="Search"
                                placeholder="Search..."
                                className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                            />
                        </div> */}
                            <div className="flex">
                                <ul className="pt-2 pb-4 space-y-1 text-sm mx-4 font-filson">
                                    <li className="flex flex-row rounded-sm my-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <Link to="/home"><span className="text-gray-100  pl-2 text-[16px]">Home</span></Link>
                                    </li>
                                    <li className="flex flex-row rounded-sm pb-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                            />
                                        </svg>
                                        <Link to="/course"><span className="text-gray-100  pl-2 text-[16px]">Course</span></Link>
                                    </li>
                                    {/* <li className="flex flex-row rounded-sm pb-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                        <Link to="/tutors"><span className="text-gray-100  pl-2 text-[16px]">Tutors</span></Link>
                                    </li> */}
                                    {/* <li className="flex flex-row rounded-sm pb-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span className="text-gray-100  pl-2 text-[16px]">
                                            Contact Us
                                        </span>
                                </li> */}
                                    <li className="flex flex-row rounded-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100 mt-80"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                            />
                                        </svg>
                                        <Link to="/" className='mt-80'>
                                            <span className="text-gray-100 font-filson pl-2 mt-80 text-[16px]">
                                                Logout
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* end  */}

            {/* desktop sidebar  */}
            {
                <div className="fixed h-[100%] lg:flex min-[320px]:hidden">
                    <div
                        className={` ${open ? "w-44" : "w-48 "
                            } flex flex-col h-[100%] p-3 bg-blue relative top-0 shadow duration-300 rounded-r-md shadow-xl shadow-blue`}
                    >
                        <div className="space-y-3">
                            <div className="flex flex-col items-start ml-4 mt-5 mb-10">
                                <div className="items-center flex min-[320px]:mr-8 lg:mr-0">
                                    <img src="./assets/icon-male-user.png" className="object-cover w-[30px] h-[30px]" alt="" />
                                    <p className="text-md text-purple font-filson mt-1 items-center flex ml-1">test
                                    </p>
                                </div>
                                <div className='mt-4'>
                                    <hr className="h-[1px] w-[120px] border-t-2 bg-transparent bg-gradient-to-r from-transparent via-purple to-transparent opacity-25 dark:opacity-100" />
                                </div>

                                {/* <div>
                            <Link to="/home"><h1 className='font-filson text-[30px] text-white'>EDUCA</h1></Link>
                        </div> */}
                                {/* <button onClick={() => setOpen(!open)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white ml-28"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button> */}


                            </div>

                            {/* <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div> */}
                            <div className="flex">
                                <ul className="pt-2 pb-4 space-y-1 text-sm mx-4 font-filson">
                                    <li className="flex flex-row rounded-sm mb-8 mt-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <Link to="/home"><span className="text-gray-100 pl-2 text-[16px]">Home</span></Link>
                                    </li>
                                    <li className="flex flex-row rounded-sm pb-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                            />
                                        </svg>
                                        <Link to="/course"><span className="text-gray-100  pl-2 text-[16px]">Course</span></Link>
                                    </li>
                                    {/* <li className="flex flex-row rounded-sm pb-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                        <Link to="/tutors"><span className="text-gray-100  pl-2 text-[16px]">Tutors</span></Link>
                                    </li> */}
                                    {/* <li className="flex flex-row rounded-sm pb-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-gray-100  pl-2 text-[16px]">
                                        Contact Us
                                    </span>
                            </li> */}
                                    <li className="flex flex-row rounded-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-100 mt-80"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                            />
                                        </svg>
                                        <Link to="/" className='mt-80'>
                                            <span className="text-gray-100 font-filson pl-2 mt-80 text-[16px]">
                                                Logout
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* end  */}


        </div>
    );
}

export default Sidebar
