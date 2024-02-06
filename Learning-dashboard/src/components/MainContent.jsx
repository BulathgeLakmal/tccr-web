import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Routes, Route } from 'react-router-dom'
import Course3 from './Course3'
import Home from './Home'
import Tutors from './Tutors'
// import CourseDetails from './CourseDetails3'
import TutorCourses from './TutorCourses'
// import CourseDetails from './CourseDetails'
// import Follow from './Follow'
import QuizForm from './QuizForm'
// import CreateCourse from './admin/CreateCourse'
import CourseContent from './CourseContent'
import CourseTable from './CourseTable'
import Folder from './Folder'
import FileUpload from './FileUpload'

const MainContent = () => {
  return (
    <div className='min-h-screen relative'>

      <div>
        <Navbar />
      </div>

      <div>
        <Sidebar />
      </div>

      {/* <div>
        <Home/>
      </div> */}

      <div>
        <Routes>
          {/* <Route path='/course' element={<Course/>}/> */}
          {/* <Route path='courses/:tutorId' element={<TutorCourses />} /> */}
          <Route path='home' element={<Home />} />
          {/* <Route path='tutors' element={<Tutors />} /> */}
          {/* <Route path='/details' element={<CourseDetails />} /> */}
          <Route path='details/:course_id' element={<CourseContent />} />
          <Route path='course' element={<Course3 />} />
          <Route path='form' element={<QuizForm />} />
          <Route path='assignment' element={<Folder />} />
          <Route path='upload' element={<FileUpload />} />

          <Route path='updateCourse' element={<CourseTable />} />
        </Routes>
      </div>
    </div>
  )
}

export default MainContent
