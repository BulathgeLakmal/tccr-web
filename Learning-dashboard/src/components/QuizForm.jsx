import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Checkbox
} from "@material-tailwind/react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton
} from "@material-tailwind/react";



function QuizForm() {
  const [type, setType] = React.useState("card");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="flex flex-col items-center justify-center text-filson lg:ml-40 min-[320px]:ml-0 ">
      <div className="text-center lg:mt-8 min-[320px]:mt-14 lg:text-[40px] min-[320px]:text-[28px] text-blue text-semibold"><h2>Start MCQ Quiz!</h2></div>
      <Card className="flex items-center justify-center lg:w-[700px] min-[320px]:w-auto h-auto bg-purple text-filson min-[320px]:m-8 lg:m-0">
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab value="card" onClick={() => setType("card")}>
                Page 1
              </Tab>
              <Tab value="paypal" onClick={() => setType("paypal")}>
                Page 2
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: type === "paypal" ? 400 : -400,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="card" className="p-0">
                <form className="mt-10 flex flex-col gap-4">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      What does HTML stands for?
                    </Typography>
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Which of the following HTML Elements is used for making any text bold ?
                    </Typography>

                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Which of the following HTML Elements is used for making any text bold ?
                    </Typography>

                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Which of the following HTML Elements is used for making any text bold ?
                    </Typography>

                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Which of the following HTML Elements is used for making any text bold ?
                    </Typography>

                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Button className="mt-2 bg-[#9300ff] shadow-xl shadow-purple w-[100px] h-auto" fullWidth>
                      Next
                    </Button>
                  </div>
                </form>
              </TabPanel>


              <TabPanel value="paypal" className="p-0">
                <form className="mt-10 flex flex-col gap-4">

                  <div className="mb-1 flex flex-col gap-6">

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      How is document type initialized in HTML5.?
                    </Typography>
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Which of the following HTML Elements is used for making any text bold ?
                    </Typography>

                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Which of the following HTML Elements is used for making any text bold ?
                    </Typography>

                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Which of the following HTML Elements is used for making any text bold ?
                    </Typography>

                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Which of the following HTML Elements is used for making any text bold ?
                    </Typography>

                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                    />




                    <Button className="mt-2 bg-[#9300ff] shadow-xl shadow-purple" onClick={handleOpen} fullWidth>
                      Complete
                    </Button>

                    <Dialog size="xs" open={open} handler={handleOpen}>
                      <DialogHeader className="">
                        {/* <IconButton
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
                                  </IconButton> */}
                      </DialogHeader>
                      <DialogBody className="overflow-y-scroll !px-5 mb-2">
                        <div className="flex flex-row gap-2 items-center justify-center">
                          <img src="../assets/icon-complete.svg" alt="" className="w-[90px] h-[90px]" />

                          <Typography
                            variant="paragraph"
                            color="blue-gray"
                            className="font-semibold uppercase opacity-70 text-[30px] font-filson"
                          >
                            Completed
                          </Typography>
                          {/* <Button className='border-[#9300ff] border-2 rounded-xl text-black w-auto h-auto p-4'> COntinue</Button> */}

                        </div>
                      </DialogBody>
                    </Dialog>
                  </div>

                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export default QuizForm;