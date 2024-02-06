import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followTutor } from '../actions/followTutor';
import { fetchCourses } from '../actions/fetchCourse';
import { Link } from 'react-router-dom';

const Tutors = () => {

  const [followedTutors, setFollowedTutors] = useState(() => {
    const storedFollowedTutors = JSON.parse(localStorage.getItem('followedTutors')) || [];
    return storedFollowedTutors;
  });


  const dispatch = useDispatch();

  const userData = useSelector((state) => state.LoginReducer)
  const userId = userData._id

  const handleFollow = (tutorId, courses) => {
    if (!followedTutors.includes(tutorId)) {
      const updatedFollowedTutors = [...followedTutors, tutorId];
      setFollowedTutors(updatedFollowedTutors);
      dispatch(followTutor(tutorId));
      dispatch(fetchCourses(courses));
    }
  };

  const data = [
    {
      tutorId: 1,
      name: 'Paul Hodgson',
      img: `./assets/male1.png`,
      courses: [
        { courseId: 101, title: 'Full Stack Development with React & Node JS - Live' },
        { courseId: 102, title: 'Complete Machine Learning & Data Science Program' },
        { courseId: 103, title: 'GATE Data Science and Artificial Intelligence 2024' },
      ],
    },
    {
      tutorId: 2,
      name: 'Ann Herisson',
      img: `./assets/female1.png`,
      courses: [
        { courseId: 201, title: 'Full Stack Development with React & Node JS - Live' },
        { courseId: 202, title: 'Complete Machine Learning & Data Science Program' },
      ],
    },
    {
        tutorId: 3,
        name: 'Dail Nelson',
        img: `./assets/male2.png`,
        courses: [
          { courseId: 201, title: 'Full Stack Development with React & Node JS - Live' },
          { courseId: 202, title: 'Complete Machine Learning & Data Science Program' },
        ],
      },
      // {
      //   tutorId: 4,
      //   name: 'Kristina Herisson',
      //   img: `./assets/female1.jpg`,
      //   courses: [
      //     { courseId: 201, title: 'Full Stack Development with React & Node JS - Live' },
      //     { courseId: 202, title: 'Complete Machine Learning & Data Science Program' },
      //   ],
      // },
  ];


  useEffect(() => {
    localStorage.setItem('followedTutors', JSON.stringify(followedTutors));
  }, [followedTutors]);

  return (
    <div className='flex flex-col lg:mt-0 min-[320px]:mt-0 items-center justify-center'>

      {/* topic start  */}
      <div className='flex flex-col lg:ml-20 min-[320px]:ml-4 lg:mt-20 min-[320px]:mt-20'>
        <h1 className='font-filson font-bold lg:text-left min-[320px]:text-left min-[320px]:ml-4'>
          <div className='lg:text-[30px] min-[320px]:text-[30px] min-[320px]:ml-0 text-black font-bold'>Tutors</div>
        </h1>
      </div>
      {/* topic end  */}

      {/* tutors start  */}
      <div className='m-auto'>
        <div className='flex lg:flex-row min-[320px]:flex-col justify-center lg:ml-60 lg:mt-10 gap-8 min-[320px]:mx-4 min-[320px]:my-8'>
          {data.map((d) => (
            <div key={d.tutorId} className='bg-purple lg:w-[250px] md:w-[350px] rounded-2xl sm:w-[350px] min-[320px]:w-[280px] h-auto min-[320px]:mt-8 text-black rounded-lg'>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <div className='h-40 flex justify-center items-center'>
                    <img src={d.img} alt="" className="flex lg:h-[100px] lg:w-[100px] rounded-full min-[320px]:w-[100px] min-[320px]:h-[100px] mt-8"/>
                </div>
                <p className="text-lg font-semibold font-filson text-blue ">{d.name}</p>
                <div>
                  {followedTutors.includes(d.tutorId) ? (
                    <div className='flex flex-row'>
                      <button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-gray-400 bg-opacity-50 text-white rounded-xl'>Following</button>
                      <Link to={`/courses/${d.tutorId}`}>
                        <button onClick={() => handleFollow(d.tutorId, d.courses)} className='ml-2 flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Courses</button>
                      </Link>
                    </div>
                  ) : (
                    <button onClick={() => handleFollow(d.tutorId, d.courses)} className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Follow</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* tutors-end  */}
    </div>
  );
};

export default Tutors;
