import React from 'react'
import { Link } from 'react-router-dom';

const Course = () => {
    return (
        <div className='flex flex-col lg:mt-0 min-[320px]:mt-0 items-center justify-center'>
            {/* topic start  */}
            <div className='flex flex-col lg:ml-20 lg:mt-20 min-[320px]:mt-20'>

                <h1 className='font-filson font-bold lg:text-left min-[320px]:text-left'><div className='lg:text-[30px] min-[320px]:text-[30px] min-[320px]:ml-0 text-black font-bold'>Our Courses</div></h1>

            </div>
            {/* end of topic  */}


            {/* caraosul start  */}
            <div className='min-[320px]:mt-[-50px] lg:0'>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data1.map((d1) => (
                        <div key={d1.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                            <div className='h-44 flex justify-center items-center'>
                                <img src={d1.img1} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4 p-4 min-[320px]:mt-8 lg:mt-0">
                                <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-4 lg:mt-0">{d1.topic1}</p>
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d1.content1}</p>
                                {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d1.url1}</p>
                                <div className='flex flex-row'>
                                    <Link to={d1.link1}><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                    <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data2.map((d2) => (
                        <div key={d2.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                            <div className='h-44 flex justify-center items-center'>
                                <img src={d2.img2} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4 p-4">
                                <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-4 lg:mt-0">{d2.topic2}</p>
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d2.content2}</p>
                                {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d2.url2}</p>
                                <div className='flex flex-row'>
                                    <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                    <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data3.map((d3) => (
                        <div key={d3.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                            <div className='h-44 flex justify-center items-center'>
                                <img src={d3.img3} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4 p-4 min-[320px]:mt-7 lg:mt-0">
                                <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-4  lg:mt-0">{d3.topic3}</p>
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d3.content3}</p>
                                {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d3.url3}</p>
                                <div className='flex flex-row'>
                                    <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                    <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data4.map((d4) => (
                        <div key={d4.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                            <div className='h-44 flex justify-center items-center'>
                                <img src={d4.img4} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4 p-4 min-[320px]:mt-7 lg:mt-0">
                                <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-4  lg:mt-0">{d4.topic4}</p>
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d4.content4}</p>
                                {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d4.url4}</p>
                                <div className='flex flex-row'>
                                    <Link><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                    <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data5.map((d5) => (
                        <div key={d5.name5} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                            <div className='h-44 flex justify-center items-center'>
                                <img src={d5.img5} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4 p-4 min-[320px]:mt-8 lg:mt-0">
                                <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-4 lg:mt-0">{d5.topic5}</p>
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d5.content5}</p>
                                {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                                <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d5.url5}</p>
                                <div className='flex flex-row'>
                                    <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                    <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* end of caraosul  */}


        </div>
    )
}

const data1 = [
    {
        topic1: `HTML - The Complete Guide to HTML for Beginners`,
        img1: `./assets/course1.png`,
        content1: `Beginner to Advance.`,
        link1: `/details`
    },
    {
        topic1: `Complete Machine Learning & Data Science Program`,
        img1: `./assets/course2.png`,
        content1: `Beginner to Advance`,
        link1: `/details2`
    },
    {
        topic1: `GATE Data Science and Artificial Intelligence 2024`,
        img1: `./assets/course3.webp`,
        content1: `Beginner to Advance`,
    },


];

const data2 = [
    {
        topic2: `HTML - The Complete Guide to HTML for Beginners`,
        img2: `./assets/course4.jpg`,
        content2: `Beginner to Advance.`,
    },
    {
        topic2: `Complete Machine Learning & Data Science Program`,
        img2: `./assets/course5.jpg`,
        content2: `Beginner to Advance`,
    },
    {
        topic2: `GATE Data Science and Artificial Intelligence 2024`,
        img2: `./assets/course6.jpg`,
        content2: `Beginner to Advance`,
    },
]

const data3 = [

    {
        topic3: `HTML - The Complete Guide to HTML for Beginners`,
        img3: `./assets/course7.jpg`,
        content3: `Beginner to Advance.`,
    },
    {
        topic3: `Complete Machine Learning & Data Science Program`,
        img3: `./assets/course8.jpg`,
        content3: `Beginner to Advance`,
    },
    {
        topic3: `GATE Data Science and Artificial Intelligence 2024`,
        img3: `./assets/course3.webp`,
        content3: `Beginner to Advance`,
    },

]

const data4 = [
    {
        topic4: `HTML - The Complete Guide to HTML for Beginners`,
        img4: `./assets/course1.png`,
        content4: `Beginner to Advance.`,
    },
    {
        topic4: `Complete Machine Learning & Data Science Program`,
        img4: `./assets/course2.png`,
        content4: `Beginner to Advance`,
    },
    {
        topic4: `GATE Data Science and Artificial Intelligence 2024`,
        img4: `./assets/course3.webp`,
        content4: `Beginner to Advance`,
    },

]


const data5 = [
    {
        topic5: `HTML - The Complete Guide to HTML for Beginners`,
        img5: `./assets/course1.png`,
        content5: `Beginner to Advance.`,
    },
    {
        topic5: `Complete Machine Learning & Data Science Program`,
        img5: `./assets/course2.png`,
        content5: `Beginner to Advance`,
    },
    {
        topic5: `GATE Data Science and Artificial Intelligence 2024`,
        img5: `./assets/course3.webp`,
        content5: `Beginner to Advance`,
    },
]

export default Course
