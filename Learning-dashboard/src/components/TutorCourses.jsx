import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TutorCourses = () => {
  const { tutorId } = useParams();
  

  const courses = [
    {
      tutorId: 1,
      courseId: 101,
      img: `../assets/course1.png`,
      title: 'Full Stack Development with React & Node JS - Live',
    },
    {
      tutorId: 1,
      courseId: 102,
      img: `../assets/course2.png`,
      title: 'Complete Machine Learning & Data Science Program',
    },
    {
      tutorId: 1,
      courseId: 103,
      img: `../assets/course3.webp`,
      title: 'GATE Data Science and Artificial Intelligence 2024',
    },
    {
      tutorId: 2,
      courseId: 201,
      img: `../assets/course1.png`,
      title: 'Full Stack Development with React & Node JS - Live',
    },
    {
      tutorId: 2,
      courseId: 202,
      img: `../assets/course2.png`,
      title: 'Complete Machine Learning & Data Science Program',
    },
    {
      tutorId: 3,
      courseId: 301,
      img: `../assets/course1.png`,
      title: 'Full Stack Development with React & Node JS - Live',
    },
    {
      tutorId: 3,
      courseId: 302,
      img: `../assets/course2.png`,
      title: 'Complete Machine Learning & Data Science Program',
    },
    {
      tutorId: 4,
      courseId: 401,
      img: `../assets/course1.png`,
      title: 'Full Stack Development with React & Node JS - Live',
    },
    {
      tutorId: 4,
      courseId: 402,
      img: `../assets/course2.png`,
      title: 'Complete Machine Learning & Data Science Program',
    },
    {
      tutorId: 4,
      courseId: 403,
      img: `../assets/course2.png`,
      title: 'Complete Machine Learning & Data Science Program',
    },
    
  ];

  // localStorage.setItem("data", JSON.stringify(courses));
  // const data = localStorage.getItem("data")
  // console.log(data)

  const tutorCourses = courses.filter((course) => course.tutorId === parseInt(tutorId));

  return (
    <div className='flex flex-col lg:mt-0 min-[320px]:mt-0 items-center justify-center'>
      {/* topic start  */}
      <div className='flex flex-col lg:ml-20 min-[320px]:ml-4 lg:mt-28 min-[320px]:mt-24'>
        <h1 className='font-filson font-bold lg:text-left min-[320px]:text-left min-[320px]:ml-4'>
          <div className='lg:text-[30px] min-[320px]:text-[30px] min-[320px]:ml-0 text-blue font-bold'>Our Courses</div>
        </h1>
      </div>
      {/* end of topic  */}

      {/* carousel start */}
      <div className=''>
        <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-10">
          {tutorCourses.map((course) => (
            <div key={course.courseId} className="bg-slate-400 bg-opacity-50 rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
              <div className='h-44 flex justify-center items-center'>
                <img src={course.img} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]"/>
              </div>
              <div className="flex flex-col items-start justify-start gap-4 p-4">
                <p className="text-lg font-semibold font-filson text-white min-[320px]:mt-20 lg:mt-0">{course.title}</p>
                {/* <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d.content}</p> */}
                <div className='flex flex-row'>
                    <Link to={`/details`}><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                    <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>
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

export default TutorCourses;
