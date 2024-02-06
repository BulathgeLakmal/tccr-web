import React, { useState } from 'react';
import video2 from "../video/video2.mp4";
// import videoDoctype from "../video/videoDoctype.mp4";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { subscribe } from '../actions/subscribe';
import { connect } from 'react-redux';


const CourseDetails = ({ subscribed, subscribe }) => {

  const [opening, setOpening] = React.useState(1);
  const handleOpening = (value) => setOpening(opening === value ? 0 : value);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  // const [subscribed, setSubscribed] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);

  // const handleSubscribe = () =>{
  //   setSubscribed(true);
  // }

  const handleSubscribe = () => {
    subscribe(); 
  };

  return (
    <div className=''>
      {/* content start  */}
      <div className="flex flex-col lg:ml-48 p-4">

        {/* top content start  */}
        <div className='flex lg:flex-row min-[320px]:flex-col-reverse justify-start relative items-center w-full lg:h-[250px] min-[320px]:h-auto bg-blue lg:mt-[-5px] min-[320px]:mt-14 py-8 min-[320px]:px-4 lg:px-8'>
          {/* left  */}
          <div>
            <div> <h1 className='font-filson text-semibold lg:mt-0 min-[320px]:mt-10 text-white text-2xl'>HTML - The Complete Guide to HTML for Beginners</h1></div>
            <div><h3 className='font-filson text-white text-sm mt-2'><div>A practical programming course for office workers, academics, and administrators</div> <div>who want to improve their productivity.</div></h3></div>
            <div><h3 className='font-filson text-white text-sm mt-2'>Created By <span className='text-[#b042ff] cursor-pointer underline'>Paul Hodgson</span></h3></div>
            {/* <div><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl mt-2'>Subscribe</button></div> */}
            {!subscribed ? (
              <div className='lg:hidden min-[320px]:flex min-[320px]:items-center min-[320px]:justify-start min-[320px]:mb-10'><button onClick={handleSubscribe} className='min-[320px]:flex min-[320px]:font-filson min-[320px]:text-[14px] min-[320px]:h-[40px] min-[320px]:items-center min-[320px]:justify-center min-[320px]:w-1/2 min-[320px]:bg-[#b042ff] min-[320px]:text-white min-[320px]:shadow-lg min-[320px]:shadow-[#ca8dfd] min-[320px]:rounded-2xl min-[320px]:mt-4'>Subscribe</button></div>
                    
            ): subscribed && (
              <div className='lg:hidden min-[320px]:flex min-[320px]:items-center min-[320px]:justify-start min-[320px]:mb-10'><button className='min-[320px]:flex min-[320px]:font-filson min-[320px]:text-[14px] min-[320px]:hover:bg-blue/90 min-[320px]:h-[40px] min-[320px]:items-center min-[320px]:justify-center min-[320px]:w-1/2 min-[320px]:bg-gray-400 min-[320px]:text-white  min-[320px]:rounded-2xl min-[320px]:mt-4'>Subscribeb</button></div>
            )}
            
          </div>

          {/* right  */}
          <div>
            {/* Image */}
            <div className='absolute bg-purple rounded-md lg:border-2 lg:border-purple top-10 lg:w-[265px] lg:h-[550px] right-8'>
              {/* <img src="./assets/course1.png" alt="" className='lg:flex min-[320px]:hidden rounded-t-md ml-[-1px] mt-[-1px] lg:w-[270px] lg:h-[170px] min-[320px]:w-[150px] min-[320px]:h-[150px] mt-2 ml-1' /> */}
                <div>
                      <video
                          className='lg:flex min-[320px]:hidden rounded-t-lg ml-[-1px] mt-[-1px] lg:w-[270px] lg:h-[150px] min-[320px]:w-[150px] min-[320px]:h-[150px] mt-2 ml-1'
                          src={video2}
                          controls
                      />
                </div>

              <div className='lg:flex min-[320px]:hidden flex-col mx-4 mt-10'>
                  <div>
                    <h2 className='text-filson text-[20px] text-black font-bold'>This course includes:</h2>
                  </div>
                  <div className='flex flex-row mt-2 bg-white/40 shadow-sm p-2 rounded-lg'>
                    <div><img src="./assets/videoImg.svg" alt=""  className='w-[20px] h-[20px]'/></div>
                    <div><span className='text-filson text-[13px] text-black mx-4 mt-4 '>5.5 hours on-demand video</span></div>
                  </div>
                  <div className='flex flex-row mt-1  bg-white/40 shadow-sm p-2 rounded-lg'>
                    <div><img src="./assets/mobileImg.svg" alt=""  className='w-[20px] h-[20px]'/></div>
                    <div><span className='text-filson text-[13px] text-black mx-4 mt-1  '>Access on mobile and TV</span></div>
                  </div>
                  <div className='flex flex-row mt-1  bg-white/40 shadow-sm p-2 rounded-lg'>
                    <div><img src="./assets/accessImg.svg" alt=""  className='w-[20px] h-[20px]'/></div>
                    <div><span className='text-filson text-[13px] text-black mx-4 mt-1 '>Full lifetime access</span></div>
                    
                  </div>
                  <div className='flex flex-row mt-1  bg-white/40 shadow-sm p-2 rounded-lg'>
                    <div><img src="./assets/downloadImg.svg" alt=""  className='w-[20px] h-[20px]'/></div>
                    <div><span className='text-filson text-[13px] text-black mx-4 mt-1 '>1 downloadable resources</span></div>
                    
                  </div>
                  <div className='flex flex-row mt-1  bg-white/40 shadow-sm p-2 rounded-lg'>
                    <div><img src="./assets/certificateImg.svg" alt=""  className='w-[23px] h-[23px]'/></div>
                    <div> <span className='text-filson text-[13px] text-black mx-4 mt-1 '>Certificate of completion</span></div>
                  
                  </div>
                  {!subscribed ? (
                    <div className='flex items-center justify-center'><button onClick={handleSubscribe} className='flex font-filson text-[14px] h-[40px] items-center justify-center w-1/2 bg-[#b042ff] text-white shadow-lg shadow-[#c175ff] hover:bg-blue/90 rounded-2xl mt-8'>Subscribe</button></div>
                  ): subscribed && (
                    <div className='flex items-center justify-center'><button className='flex font-filson text-[14px] h-[40px] items-center justify-center w-1/2 bg-gray-400 text-white shadow-lg rounded-2xl mt-8'>Subscribeb</button></div>
                  )}
                  
              </div>
            </div>
          </div>
        </div>
        {/* top content end  */}


        {/* middle part start  */}
          {/* what-learn start  */}
              <div className='flex flex-col relative lg:w-3/4 lg:h-[400px] min-[320px]:w-auto min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4'>
                      <div> <h1 className='font-filson text-semibold lg:mt-0 min-[320px]:mt-4 text-black text-2xl p-10'>What you'll learn</h1></div>
                      
                      <div className='lg:m-4 text-[14px] px-10 min-[320px]:mb-14'>
                          <div className='flex lg:flex-row min-[320px]:flex-col font-filson text-blue/80'>
                                      <div className='flex flex-row items-center w-full'>
                                          <div><img src="./assets/icon-right.png" alt="" className='w-[22px] h-[22px]' /></div>
                                          <div className='ml-2'>Learn HTML Web Design Language</div>
                                      </div>
                                      <div className='flex flex-row items-center lg:ml-8 w-full'>
                                          <div><img src="./assets/icon-right.png" alt="" className='w-[22px] h-[22px]' /></div>
                                          <div className='min-[320px]:mt-4 lg:mt-0 ml-2'>Build HTML Pages from Start to Finish</div>
                                      </div>

                          </div>
                          <div className='flex lg:flex-row min-[320px]:flex-col font-filson text-blue/80 lg:mt-4 min-[320px]:mt-4'>
                          <div className='flex flex-row items-center w-full'>
                                          <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                          <div className='ml-2'>Learn How to Customize HTML Elements Using Attributes</div>
                                      </div>
                                      <div className='flex flex-row items-center lg:ml-8 w-full'>
                                          <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                          <div className='min-[320px]:mt-4 lg:mt-0 ml-2'>Learn What HTML Tags are and How to Use Them</div>
                                      </div>
                          </div>
                          <div className='flex lg:flex-row min-[320px]:flex-col font-filson text-blue/80 lg:mt-4 min-[320px]:mt-4'>
                          <div className='flex flex-row items-center w-full'>
                                          <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                          <div className='ml-2'>Creating Forms, Inserting Images/Videos, Adding Lists</div>
                                      </div>
                                      <div className='flex flex-row items-center lg:ml-8 w-full'>
                                          <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                          <div className='min-[320px]:mt-4 lg:mt-0 ml-2 '>Master Common HTML Tags Used In Web Development</div>
                                      </div>
                          </div>
                          <div className='flex lg:flex-row min-[320px]:flex-col font-filson text-blue/80 lg:mt-4 min-[320px]:mt-4'>
                          <div className='flex flex-row items-center w-full'>
                                          <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                          <div className='ml-2'>Creating Forms, Inserting Images/Videos, Adding Lists</div>
                                      </div>
                                      <div className='flex flex-row items-center lg:ml-8 w-full'>
                                          <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                          <div className='min-[320px]:mt-4 lg:mt-0 ml-2 '>Master Common HTML Tags Used In Web Development</div>
                                      </div>
                          </div>
                      </div>
              </div>
          {/* end  */}
        {/* end */}


        {/* bottom content start  */}
        <div className='flex flex-col items-start justify-start lg:w-[900px] min-[320px]:w-auto lg:ml-2'>

          {/* Course Content with Dropdown */}
          <div>
            <h1 className='font-filson font-bold text-black text-2xl mt-8 ml-4'>
              Course Content
            </h1>
            <div className='font-filson border-black/40 border-2 lg:w-[980px] min-[320px]:w-auto rounded-lg lg:p-4 min-[320px]:p-8 mt-4'>
            {!subscribed ? (
                <Accordion open={opening === 1}>
                  <AccordionHeader onClick={() => handleOpening(1)} className='text-[15px] font-filson text-blue/40'>Introduction to HTML</AccordionHeader>
                  <AccordionBody>
                    <div className='flex flex-row items-center justify-between w-[100%]'>
                      {/* div-1  */}
                            <div>
                              <a className='text-[16px] font-bold text-blue underline cursor-pointer'>HTML Basics</a>
                            </div>
                            <div> 
                              <a className='text-[16px] ml-8 font-bold text-blue underline cursor-pointer' onClick={handleOpen}>Preview</a>
                              <Dialog size="xs" open={open} handler={handleOpen}>
                                            <DialogHeader className="justify-between">
                                              
                                              <div>
                                                <Typography variant="h5" color="blue-gray" className='font-filson'>
                                                  Course Preview
                                                </Typography>
                                                <Typography color="gray" variant="paragraph" className='font-filson'>
                                                HTML, CSS, & JavaScript - Course for Beginners
                                                </Typography>
                                              </div>
                                              <IconButton
                                                color="blue-gray"
                                                size="sm"
                                                variant="text"
                                                onClick={handleOpen}
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                  strokeWidth={2}
                                                  className="h-5 w-5"
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                  />
                                                </svg>
                                              </IconButton>
                                            </DialogHeader>
                                            <DialogBody className="overflow-y-scroll !px-5">
                                              <div className="mb-6">
                                                {/* <Typography
                                                  variant="paragraph"
                                                  color="blue-gray"
                                                  className="py-3 font-semibold uppercase opacity-70"
                                                >
                                                  HTML Basis
                                                </Typography> */}
                                                
                                                <video className="h-full w-full rounded-lg" controls autoPlay>
                                                  <source src={video2} type="video/mp4" /> 
                                                </video>
                                              </div>
                                            </DialogBody>
                              </Dialog>
                            </div>
                      {/* end  */}
                    </div>
                  </AccordionBody>
                  <AccordionBody>
                    {/* div-2  */}
                    <div>
                        <h4 className='text-[16px] font-bold text-blue'>Resources and course outline</h4>
                    </div>
                    {/* end */}
                  </AccordionBody>
                  <AccordionBody>
                    {/* div-2  */}
                    <div>
                        <h4 className='text-[16px] font-bold text-blue'>Getting to Know HTML</h4>
                    </div>
                    {/* end */}
                  </AccordionBody>
                  <AccordionBody>
                    {/* div-2  */}
                    <div>
                        <h4 className='text-[16px] font-bold text-blue'>What is an Element</h4>
                    </div>
                    {/* end */}
                  </AccordionBody>
                  <AccordionBody>
                    {/* div-2  */}
                    <div>
                        <h4 className='text-[16px] font-bold text-blue'>HTML page structure</h4>
                    </div>
                    {/* end */}
                  </AccordionBody>
                </Accordion>
            ) : subscribed && (
              <>
                <Accordion open={opening === 1}>
                  <AccordionHeader onClick={() => handleOpening(1)} className='text-[15px] font-filson text-blue/40'>Introduction to HTML</AccordionHeader>
                  <AccordionBody>
                    <div className='flex flex-row items-center justify-between w-[100%]'>
                      {/* div-1  */}
                            <div>
                              <a className='text-[16px] font-bold text-blue underline cursor-pointer'>HTML Basics</a>
                            </div>
                            <div> 
                              <a className='text-[16px] ml-8 font-bold text-blue underline cursor-pointer' onClick={handleOpen}>Preview</a>
                              <Dialog size="xs" open={open} handler={handleOpen}>
                                            <DialogHeader className="justify-between">
                                              
                                              <div>
                                                <Typography variant="h5" color="blue-gray" className='font-filson'>
                                                  Course Preview
                                                </Typography>
                                                <Typography color="gray" variant="paragraph" className='font-filson'>
                                                HTML, CSS, & JavaScript - Course for Beginners
                                                </Typography>
                                              </div>
                                              <IconButton
                                                color="blue-gray"
                                                size="sm"
                                                variant="text"
                                                onClick={handleOpen}
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                  strokeWidth={2}
                                                  className="h-5 w-5"
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                  />
                                                </svg>
                                              </IconButton>
                                            </DialogHeader>
                                            <DialogBody className="overflow-y-scroll !px-5">
                                              <div className="mb-6">
                                                {/* <Typography
                                                  variant="paragraph"
                                                  color="blue-gray"
                                                  className="py-3 font-semibold uppercase opacity-70"
                                                >
                                                  HTML Basis
                                                </Typography> */}
                                                
                                                <video className="h-full w-full rounded-lg" controls autoPlay>
                                                  <source src={video2} type="video/mp4" /> 
                                                </video>
                                              </div>
                                            </DialogBody>
                              </Dialog>
                            </div>
                      {/* end  */}
                    </div>
                  </AccordionBody>
                  <AccordionBody>
                    {/* div-2  */}
                    <div>
                        <h4 className='text-[16px] font-bold text-blue'>Resources and course outline</h4>
                    </div>
                    {/* end */}
                  </AccordionBody>
                  <AccordionBody>
                    {/* div-2  */}
                    <div>
                        <h4 className='text-[16px] font-bold text-blue'>Getting to Know HTML</h4>
                    </div>
                    {/* end */}
                  </AccordionBody>
                  <AccordionBody>
                    {/* div-2  */}
                    <div>
                        <h4 className='text-[16px] font-bold text-blue'>What is an Element</h4>
                    </div>
                    {/* end */}
                  </AccordionBody>
                  <AccordionBody>
                    {/* div-2  */}
                    <div>
                        <h4 className='text-[16px] font-bold text-blue'>HTML page structure</h4>
                    </div>
                    {/* end */}
                  </AccordionBody>
                </Accordion>
                <Accordion open={opening === 2} >
                  <AccordionHeader onClick={() => handleOpening(2)} className='text-[15px] font-filson text-blue/40'>
                    HTML Tags
                  </AccordionHeader>
                  <AccordionBody>
                  </AccordionBody>
                </Accordion>
                <Accordion open={opening === 3}>
                  <AccordionHeader onClick={() => handleOpening(3)} className='text-[15px] font-filson text-blue/40'>
                    HTML Forms
                  </AccordionHeader>
                  <AccordionBody>
                  </AccordionBody>
                </Accordion>
                <Accordion open={opening === 4}>
                  <AccordionHeader onClick={() => handleOpening(4)} className='text-[15px] font-filson text-blue/40'>
                    HTML Conclusion and final tags
                  </AccordionHeader>
                  <AccordionBody>
                  </AccordionBody>
                </Accordion>
                <Accordion open={opening === 5}>
                  <AccordionHeader onClick={() => handleOpening(5)} className='text-[15px] font-filson text-blue/40'>
                    Bonus Section
                  </AccordionHeader>
                  <AccordionBody>
                  </AccordionBody>
                </Accordion>
              </>
            )}
            </div>
          </div>
          {/* course-content end  */}
        </div>
        {/* bottom content end  */}
        
        {/* requirements start  */}
        <div className='flex flex-col items-start justify-start lg:w-full'>
                <div>
                    <div><h1 className='font-filson font-bold text-black text-2xl mt-8 lg:ml-8'>Requirements</h1></div>
                    <div><h3 className='font-filson text-blue lg:ml-10 mt-4 text-[16px]'>No HTML knowledge needed. You will learn everything here you need to know</h3></div>
                </div>
        </div>
        {/* end  */}

        {/* description start  */}
        <div className='flex flex-col items-start justify-start lg:w-full'>
                <div>
                    <div><h1 className='font-filson font-bold text-black text-2xl mt-8 lg:ml-8'>Description</h1></div>
                    <div><h3 className='font-filson text-blue lg:ml-10 mt-4 text-[16px]'>
                        <div className='lg:w-[1000px] min-[320px]:w-auto'>Are you prepared to take a thrilling trip into the web development industry? "The Complete Guide to HTML Zero to Hero"
                             is the best resource for learning HTML and becoming a web development hero, regardless of your level of experience.</div>
                        <div className='mt-4 lg:w-[1000px] min-[320px]:w-auto'>Understanding HTML, or Hypertext Markup Language, is essential for anyone interested in developing websites or web applications or enhancing their digital literacy. HTML is the foundation of the website. With the help of this extensive Udemy course, we will take you from having no prior HTML knowledge to a hero-level grasp,
                             enabling you to work with developers, produce beautiful websites, and even pursue a career in web development.</div>
                    </h3></div>
                </div>
        </div>
        {/* end  */}
      </div>
      {/* content end  */}
    </div>
  );
};

// export default CourseDetails;
const mapStateToProps = (state) => ({
  subscribed: state.subscribeReducer.subscribed, 
});

const mapDispatchToProps = {
  subscribe,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);