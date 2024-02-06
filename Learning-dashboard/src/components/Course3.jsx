// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Course3 = () => {
//     const dispatch = useDispatch();
//     const [courseDetails, setCourseDetails] = useState([]);

//     // Function to fetch all courses
//     const getAllCourses = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/course');
//             setCourseDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching courses:', error);
//         }
//     };

//     useEffect(() => {
//         // Fetch all courses
//         getAllCourses();
//     }, []);

//     return (
//         <div className='flex flex-col lg:mt-0 min-[320px]:mt-0 items-center justify-center'>
//             {/* topic start */}
//             <div className='flex flex-col lg:ml-20 lg:mt-20 min-[320px]:mt-20'>
//                 <h1 className='font-filson font-bold lg:text-left min-[320px]:text-left'>
//                     <div className='lg:text-[30px] min-[320px]:text-[30px] min-[320px]:ml-0 text-black font-bold'>Our Courses</div>
//                 </h1>
//             </div>
//             {/* end of topic */}

//             {/* carousel start */}
//             <div className='min-[320px]:mt-[-50px] lg:0'>
//                 <div className="flex lg:flex-row lg:w-[500px] min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
//                     {Array.isArray(courseDetails) && courseDetails.map((course) => (
//                         <div key={course.course_id} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
//                             {data1.map((d1) => (
//                                 <div className='h-44 flex justify-center items-center'>
//                                     <img src={d1.img1} alt="" className="lg:h-[200px] lg:w-[ rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]" />
//                                 </div>
//                             ))}
//                             <div className="flex flex-col items-start justify-start gap-4 p-4 min-[320px]:mt-8 lg:mt-0">
//                                 <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-4 lg:mt-0">{course.course_name}</p>
//                                 <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{course.course_desc}</p>
//                                 <p className="text-left font-filson lg:mt-[-16px] text-blue text-[11px]">{course.category}</p>
//                                 <div className='flex flex-row'>
//                                     <Link to={`/details/${course.course_id}`}>
//                                         <button className='flex font-filson text-[14px] w-auto h-[35px] p-2 bg-blue text-white rounded-xl'>More</button>
//                                     </Link>
//                                     <button className='flex ml-4 font-filson text-[14px] w-auto h-[35px] p-2 bg-blue text-white rounded-xl'>Subscribe</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/* end of carousel */}
//         </div>
//     );
// };

// const data1 = [
//     {
//         img1: [`./assets/course1.png`, `./assets/course2.png`, `./assets/course3.webp`, `./assets/course3.webp`,
//             `./assets/course3.webp`, `./assets/course3.webp`,]
//     }
// ];
// export default Course3;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Course3 = () => {
//     const dispatch = useDispatch();
//     const [courseDetails, setCourseDetails] = useState([]);

//     // Function to fetch all courses
//     const getAllCourses = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/course');
//             setCourseDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching courses:', error);
//         }
//     };

//     useEffect(() => {
//         // Fetch all courses
//         getAllCourses();
//     }, []);

//     const data1 = {
//         img1: [
//             './assets/course1.png',
//             './assets/course2.png',
//             './assets/course3.webp',
//             './assets/course4.jpg',
//             './assets/course5.jpg',
//             './assets/course6.jpg',
//         ],
//     };

//     return (
//         <div className='flex flex-col lg:mt-0 min-[320px]:mt-0 items-center justify-center'>
//             {/* topic start */}
//             <div className='flex flex-col lg:ml-20 lg:mt-20 min-[320px]:mt-20'>
//                 <h1 className='font-filson font-bold lg:text-left min-[320px]:text-left'>
//                     <div className='lg:text-[30px] min-[320px]:text-[30px] min-[320px]:ml-0 text-black font-bold'>Our Courses</div>
//                 </h1>
//             </div>
//             {/* end of topic */}

//             {/* carousel start */}
//             <div className='min-[320px]:mt-[-50px] lg:0'>
//                 <div className='flex flex-wrap justify-center items-center lg:ml-40 lg:mt-20 min-[320px]:p-4 min-[320px]:mt-10'>
//                     {Array.isArray(courseDetails) && courseDetails.map((course, index) => (
//                         <div key={course.course_id} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto mb-8 lg:ml-4 lg:mr-4 lg:mt-10 min-[320px]:mt-20 text-black rounded-lg">
//                             <div className='h-44 flex justify-center items-center'>
//                                 <img src={data1.img1[index % data1.img1.length]} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]" />
//                             </div>
//                             <div className="flex flex-col items-start justify-start gap-4 p-4 min-[320px]:mt-14 lg:mt-0">
//                                 <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-4 lg:mt-0">{course.course_name}</p>
//                                 <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{course.course_desc}</p>
//                                 <p className="text-left font-filson lg:mt-[-16px] text-blue text-[11px] font-bold">{course.category}</p>
//                                 <div className='flex flex-row'>
//                                     <Link to={`/details/${course.course_id}`}>
//                                         <button className='flex font-filson text-[14px] w-auto h-[35px] p-2 bg-blue text-white rounded-xl'>See More</button>
//                                     </Link>
//                                     <button className='flex ml-4 font-filson text-[14px] w-auto h-[35px] p-2 bg-blue text-white rounded-xl'>Subscribe</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//             {/* end of carousel */}
//         </div>
//     );
// };

// export default Course3;
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
// import CourseContent from './CourseContent';

const Course3 = () => {
    const dispatch = useDispatch();
    const [courseDetails, setCourseDetails] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const { course_id } = useParams();

    // Function to fetch all courses
    const getAllCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/course');
            setCourseDetails(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    useEffect(() => {
        // Fetch all courses
        getAllCourses();
    }, []);

    const data1 = {
        img1: [
            './assets/course1.png',
            './assets/course2.png',
            './assets/course3.webp',
            './assets/course4.jpg',
            './assets/course5.jpg',
            './assets/course6.jpg',
        ],
    };

    const handleSeeMoreClick = (course_id) => {
        // Toggle the selected course
        setSelectedCourseId((prevSelectedCourseId) =>
            prevSelectedCourseId === course_id ? null : course_id
        );
    };

    // Render a loading message or spinner while fetching data
    if (courseDetails.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col lg:mt-0 min-[320px]:mt-0 items-center justify-center'>
            {/* topic start */}
            <div className='flex flex-col lg:ml-20 lg:mt-20 min-[320px]:mt-20'>
                <h1 className='font-filson font-bold lg:text-left min-[320px]:text-left'>
                    <div className='lg:text-[30px] min-[320px]:text-[30px] min-[320px]:ml-0 text-black font-bold'>
                        Our Courses
                    </div>
                </h1>
            </div>
            {/* end of topic */}

            {/* carousel start */}
            <div className='min-[320px]:mt-[-50px] lg:0'>
                <div className='flex flex-wrap justify-center items-center lg:ml-40 lg:mt-20 min-[320px]:p-4 min-[320px]:mt-10'>
                    {courseDetails.map((course, index) => (
                        <div
                            key={course.course_id}
                            className={`bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto mb-8 lg:ml-4 lg:mr-4 lg:mt-10 min-[320px]:mt-20 text-black rounded-lg ${selectedCourseId === course.course_id ? 'border-4 border-blue' : ''
                                }`}
                        >
                            <div className='h-44 flex justify-center items-center'>
                                <img
                                    src={data1.img1[index % data1.img1.length]}
                                    alt=''
                                    className='lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]'
                                />
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 p-4 min-[320px]:mt-14 lg:mt-0'>
                                <p className='text-lg font-semibold font-filson text-blue min-[320px]:mt-4 lg:mt-0'>
                                    {course.course_name}
                                </p>
                                <p className='text-left font-filson lg:mt-[-10px] text-blue text-[12px]'>
                                    {course.course_desc}
                                </p>
                                <p className='text-left font-filson lg:mt-[-16px] text-blue text-[11px] font-bold'>
                                    {course.category}
                                </p>
                                <div className='flex flex-row'>
                                    <Link to={`/details/${course.course_id}`}>
                                        <button
                                            onClick={() => handleSeeMoreClick(course.course_id)}
                                            className='flex font-filson text-[14px] w-auto h-[35px] p-2 bg-blue text-white rounded-xl'
                                        >
                                            See More
                                        </button>
                                    </Link>
                                    <button className='flex ml-4 font-filson text-[14px] w-auto h-[35px] p-2 bg-blue text-white rounded-xl'>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* end of carousel */}
        </div>
    );
};

export default Course3;
