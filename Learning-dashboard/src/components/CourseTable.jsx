import React, { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Tabs,
    TabsHeader,
    Tab,
    IconButton,
    Tooltip,
    CardFooter,
    TabsBody,
} from '@material-tailwind/react';
import { Dialog, Input } from '@material-tailwind/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { Select, Option } from "@material-tailwind/react";


const initialValues = {
    course_name: '',
    course_desc: '',
    category: '',
    module_name: '',
    lecture_desc: '',
    lecture_number: '',
    video_URL: '',
    status: ''
};

const CourseForm = ({ values, handleChange, handleSubmit }) => (
    < form onSubmit={handleSubmit} >
        <CardBody className="flex flex-col gap-4">
            {/* <Typography variant="h4" color="blue-gray">
                {values.id ? 'Edit Course' : 'Create Course'}
            </Typography> */}

            <Typography className="-mb-2" variant="h6">
                Course Name
            </Typography>
            <Input label="Name" size="lg" name="course_name" value={values.course_name} onChange={handleChange} />

            <Typography className="-mb-2" variant="h6">
                Course Description
            </Typography>
            <Input label="Description" size="lg" name="course_desc" value={values.course_desc} onChange={handleChange} />

            <Typography className="-mb-2" variant="h6">
                Category
            </Typography>
            <Input label="Category" size="lg" name="category" value={values.category} onChange={handleChange} />

        </CardBody>
        <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" className="bg-purple cursor-pointer" fullWidth>
                {values.course_id ? 'UPDATE' : 'ADD'}
            </Button>
        </CardFooter>
    </form >
);

// const ModuleForm = ({ values, handleChange, handleSubmit }) => (
//     <form onSubmit={handleSubmit}>
//         <CardBody className="flex flex-col gap-4">
//             <Typography variant="h4" color="blue-gray">
//                 {values.id ? 'Edit Module' : 'Create Module'}
//             </Typography>

//             <Typography className="-mb-2" variant="h6">
//                 <Select
//                     placeholder="Select Course"
//                     className="border border-blue-gray-200 focus:border-gray-900"
//                     labelProps={{ className: "before:content-none after:content-none" }}
//                     menuProps={{ className: "h-48" }}
//                     value={values.course_id} // Assuming `course_id` is a part of the form's `values`
//                     onChange={(selectedCourseId) => handleChange({ target: { name: 'course_id', value: selectedCourseId } })}
//                 >
//                     {courseDetails.map(({ course_id, course_name, flags }) => (
//                         <Option key={course_id} value={course_id}>
//                             <div className="flex items-center gap-x-2">
//                                 <img
//                                     src={flags.svg}
//                                     alt={course_name}
//                                     className="h-4 w-4 rounded-full object-cover"
//                                 />
//                                 {course_name}
//                             </div>
//                         </Option>
//                     ))}
//                 </Select>
//             </Typography>
//             <Input label="Course" size="lg" name="course_id" value={values.course_id} onChange={handleChange} />

//             <Typography className="-mb-2" variant="h6">
//                 Module Name
//             </Typography>
//             <Input label="Name" size="lg" name="module_name" value={values.module_name} onChange={handleChange} />

//         </CardBody>
//         <CardFooter className="pt-0">
//             <Button type="submit" variant="gradient" className="bg-purple cursor-pointer" fullWidth>
//                 {values.id ? 'UPDATE' : 'ADD'}
//             </Button>
//         </CardFooter>
//     </form>
// );

const ModuleForm = ({ values, handleChange, handleSubmit, courseDetails }) => (

    // <form onSubmit={handleSubmit}>
    //     <CardBody className="flex flex-col gap-4">
    //         <Typography variant="h4" color="blue-gray">
    //             {values.id ? 'Edit Module' : 'Create Module'}
    //         </Typography>

    //         <Typography className="-mb-2" variant="h6">
    //             <Select
    //                 placeholder="Select Course"
    //                 className="border border-blue-gray-200 focus:border-gray-900"
    //                 labelProps={{ className: "before:content-none after:content-none" }}
    //                 menuProps={{ className: "h-48" }}
    //                 value={values.course_id ?? ''}
    //                 onChange={(selectedCourseId) => handleChange({ target: { name: 'course_id', value: selectedCourseId } })}
    //             >
    //                 {(courseDetails ?? []).map(({ course_id, course_name }) => (
    //                     <Option key={course_id} value={course_id}>
    //                         <div className="flex items-center gap-x-2">
    //                             {course_name}
    //                         </div>
    //                     </Option>
    //                 ))}
    //             </Select>


    //         </Typography>

    //         <Input label="Module Name" size="lg" name="module_name" value={values.module_name} onChange={handleChange} />
    //     </CardBody>
    //     <CardFooter className="pt-0">
    //         <Button type="submit" variant="gradient" className="bg-purple cursor-pointer" fullWidth>
    //             {values.id ? 'UPDATE' : 'ADD'}
    //         </Button>
    //     </CardFooter>
    // </form>
    <form onSubmit={handleSubmit} >
        <CardBody className="flex flex-col gap-4">
            {/* <Typography variant="h4" color="blue-gray">
                {values.id ? 'Edit Module' : 'Create Module'}
            </Typography> */}

            <Typography className="-mb-2" variant="h6">
                <Select
                    placeholder="Select Course"
                    className="border border-blue-gray-200 focus:border-gray-900"
                    labelProps={{ className: "before:content-none after:content-none" }}
                    menuProps={{ className: "h-48" }}
                    value={values.course_module_id ?? ''}
                    onChange={(selectedCourseId) => handleChange({ target: { name: 'course_module_id', value: selectedCourseId } })}
                >
                    {(courseDetails ?? []).map(({ course_module_id, course_name }) => (
                        <Option key={course_module_id} value={course_module_id}>
                            <div className="flex items-center gap-x-2">
                                {course_name}
                            </div>
                        </Option>
                    ))}
                </Select>
            </Typography>

            <Input label="Module Name" size="lg" name="module_name" value={values.module_name} onChange={handleChange} />
        </CardBody>
        <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" className="bg-purple cursor-pointer" fullWidth>
                {values.id ? 'UPDATE' : 'ADD'}
            </Button>
        </CardFooter>
    </form >
);

const LectureForm = ({ values, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <CardBody className="flex flex-col gap-4">
            {/* <Typography variant="h4" color="blue-gray">
                {values.id ? 'Edit Lecture' : 'Create Lecture'}
            </Typography> */}

            <Typography className="-mb-2" variant="h6">
                Lecture Description
            </Typography>
            <Input label="Description" size="lg" name="lecture_desc" value={values.lecture_desc} onChange={handleChange} />

            <Typography className="-mb-2" variant="h6">
                Lecture Number
            </Typography>
            <Input label="Number" size="lg" name="lecture_number" value={values.lecture_number} onChange={handleChange} />

            <Typography className="-mb-2" variant="h6">
                Video URL
            </Typography>
            <Input label="URL" size="lg" name="video_URL" value={values.video_URL} onChange={handleChange} />

            <Typography className="-mb-2" variant="h6">
                Status
            </Typography>
            <Input label="Status" size="lg" name="status" value={values.status} onChange={handleChange} />

        </CardBody>
        <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" className="bg-purple cursor-pointer" fullWidth>
                {values.id ? 'UPDATE' : 'ADD'}
            </Button>
        </CardFooter>
    </form>
);

const Table = ({ headers, rows, onEdit, onDelete }) => (
    <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
            <tr>
                {headers.map((head) => (
                    <th key={head} className="border-y border-blue-gray-100 bg-purple p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                            {head}
                        </Typography>
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row) => (
                <tr key={row.id}>
                    {row.cells.map((cell, index) => (
                        <td key={index}>
                            <div className="flex flex-col">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {cell}
                                </Typography>
                            </div>
                        </td>
                    ))}
                    <td>
                        <Tooltip content="Edit Course">
                            <IconButton variant="text" onClick={() => onEdit(row)}>
                                <PencilIcon className="h-4 w-4" />
                            </IconButton>
                        </Tooltip>
                    </td>
                    <td>
                        <Tooltip content="Delete Course">
                            <IconButton variant="text" onClick={() => onDelete(row)}>
                                <TrashIcon className="h-4 w-4" />
                            </IconButton>
                        </Tooltip>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const CourseTable = () => {
    const [open, setOpen] = useState(false);
    const [deleteFormOpen, setDeleteFormOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const handleDeleteFormOpen = () => setDeleteFormOpen((cur) => !cur);

    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    //course details
    const [courseDetails, setCourseDetails] = useState([]);
    const [courseDetailsUpdate, setCourseDetailsUpdate] = useState([]);
    const [courseDelete, setCourseDelete] = useState([]);
    const { course_id } = useParams();
    const { module_id } = useParams();
    const { lecture_id } = useParams();

    const [type, setType] = useState('card');

    //course module details
    const [courseModuleDetails, setCourseModuleDetails] = useState([]);
    const [courseModuleDetailsUpdate, setCourseModuleDetailsUpdate] = useState([]);
    const [moduleDelete, setModuleDelete] = useState([])

    //lecture details
    const [lectureDetails, setLectureDetails] = useState([]);
    const [lectureDetailsUpdate, setLectureDetailsUpdate] = useState([])
    const [lectureDelete, setLectureDelete] = useState([])


    const [editingRow, setEditingRow] = useState(null);
    const [deletingRow, setDeletingRow] = useState(null);

    const { values, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            setLoading(true);

            try {
                let res;
                if (type === 'course') {
                    res = await axios.post('http://localhost:8080/course', {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        course_name: values.course_name,
                        course_desc: values.course_desc,
                        category: values.category,
                    });
                } else if (type === 'module') {
                    res = await axios.post('http://localhost:8080/courseModule', {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        course_id: values.course_id,
                        module_name: values.module_name,
                    });
                } else if (type === 'lecture') {
                    res = await axios.post('http://localhost:8080/lectures', {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        lecture_desc: values.lecture_desc,
                        lecture_number: values.lecture_number,
                        video_URL: values.video_URL,
                        status: values.status,
                    });
                }

                if (res && res.status === 200) {
                    if (type === 'course') {
                        setCourseDetails([...courseDetails, res.data]);
                    } else if (type === 'module') {
                        setCourseModuleDetails([...courseModuleDetails, res.data])
                    } else if (type === 'lecture') {
                        setLectureDetails([...lectureDetails, res.data])
                    }

                    setLoading(false);
                    handleOpen();
                }
            } catch (error) {
                setLoading(false);
                console.error('Error creating', type, ':', error);
            }
        },
    });
    // end of lecture details

    // delete course
    const onDelete = (row) => {
        setDeletingRow(row);
        handleDeleteFormOpen();
    };

    const deleteCourse = async () => {
        try {
            await axios.delete(`http://localhost:8080/course/${deletingRow.id}`);

            const updatedCourseDetails = await axios.get('http://localhost:8080/course');
            setCourseDetails(updatedCourseDetails.data);
        } catch (error) {
            console.error('Error deleting course:', error);
        }

        setDeletingRow(null);
        handleDeleteFormOpen();
    };
    // end of deletecourse

    //delete module
    const deleteModule = async () => {
        try {
            await axios.delete(`http://localhost:8080/courseModule/${deletingRow.id}`);

            const updatedCourseModuleDetails = await axios.get('http://localhost:8080/courseModule');
            setCourseModuleDetails(updatedCourseModuleDetails.data);
        } catch (error) {
            console.error('error deleting module: ', error)
        }
        setDeletingRow(null);
        handleDeleteFormOpen();
    }
    // end of delete module

    //delete lecture
    const deleteLecture = async () => {
        try {
            await axios.delete(`http://localhost:8080/lectures/${deletingRow.id}`)

            const updateLectureDetails = await axios.get('http://localhost:8080/lectures');
            setLectureDetails(updateLectureDetails.data)
        } catch (error) {
            console.error('error deleting lecture: ', error)
        }
        setDeletingRow(null);
        handleDeleteFormOpen()
    }
    // end of delete lecture

    useEffect(() => {
        // COURSE
        const getAllCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/course');
                setCourseDetails(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        const getCourseForUpdate = async () => {
            try {
                const response = await axios.put(`http://localhost:8080/course/${course_id}`);
                setCourseDetailsUpdate(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        const getAllCourse = async () => {
            try {
                const response = await axios.get('http://localhost:8080/course', {
                    params: {
                        fields: 'course_id,course_name', // Specify the fields you want 
                    },
                });
                setCourseDetails(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        // MODULE
        const getAllCourseModule = async () => {
            try {
                const response = await axios.get('http://localhost:8080/courseModule');
                setCourseModuleDetails(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        const getCourseModuleForUpdate = async () => {
            try {
                const response = await axios.put(`http://localhost:8080/courseModule/${module_id}`);
                setCourseModuleDetailsUpdate(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }

        };

        //LECTURE
        const getAllLecture = async () => {
            try {
                const response = await axios.get('http://localhost:8080/lectures');
                setLectureDetails(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        const getLectureForUpdate = async () => {
            try {
                const response = await axios.put(`http://localhost:8080/lectures/${lecture_id}`);
                setLectureDetailsUpdate(response.data)
            } catch (error) {
                console.error('Error fetching lecture: ', error)
            }
        };

        getLectureForUpdate();
        deleteLecture();
        deleteModule();
        getAllCourse();
        getCourseModuleForUpdate();
        deleteCourse();
        getAllCourses();
        getAllCourseModule();
        getAllLecture();
        getCourseForUpdate();
    }, [course_id]);

    if (courseDetails.length === 0 || courseModuleDetails.length === 0 || lectureDetails.length === 0) {
        return <div>Loading...</div>;
    }

    const renderForm = () => {
        if (type === 'course') {
            return <CourseForm values={values} handleChange={handleChange} handleSubmit={handleSubmit} />;
        } else if (type === 'module') {
            return <ModuleForm values={values} handleChange={handleChange} handleSubmit={handleSubmit} />;
        } else if (type === 'lecture') {
            return <LectureForm values={values} handleChange={handleChange} handleSubmit={handleSubmit} />;
        }
    };

    return (
        <div>
            <Card className="h-full w-[1000px] lg:ml-80 lg:p-4">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Course Details
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <div>
                                <Button className="flex items-center gap-3 bg-blue cursor-pointer" size="sm" onClick={() => {
                                    setEditingRow(null); // Reset editingRow when clicking "Add Course" button
                                    setValues(initialValues); // Reset form values
                                    handleOpen();
                                }}>
                                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Details
                                </Button>
                                <Dialog size="xs" open={open} handler={handleOpen}>
                                    <Card className="mx-auto w-full max-w-[24rem]">
                                        {renderForm()}
                                    </Card>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="">
                    <div className=" gap-4 md:flex-row mt-10">
                        <Tabs value={type} className="md:w-max">
                            <TabsHeader>
                                <Tab value="course" onClick={() => setType('course')}>
                                    Courses
                                </Tab>
                                <Tab value="module" onClick={() => setType('module')}>
                                    Modules
                                </Tab>
                                <Tab value="lecture" onClick={() => setType('lecture')}>
                                    Lectures
                                </Tab>
                            </TabsHeader>
                            <TabsBody className="" animate={{}}>
                                {type === 'course' && (
                                    <Table
                                        headers={['Course', 'Course Name', 'Description', 'Category', '']}
                                        rows={courseDetails.map((course) => ({
                                            id: course.course_id,
                                            cells: [course.course_id, course.course_name, course.course_desc, course.category, ''],
                                        }))}

                                        onEdit={(row) => {
                                            setEditingRow(row);
                                            setValues({
                                                course_name: row.cells[1],
                                                course_desc: row.cells[2],
                                                category: row.cells[3],
                                            });
                                            console.log('Edit course with ID:', row.id);
                                            handleOpen();
                                        }}

                                        onDelete={(row) => {
                                            setDeletingRow(row);
                                            setValues({
                                                course_name: row.cells[1],
                                                course_desc: row.cells[2],
                                                category: row.cells[3],
                                            });
                                            console.log('Delete course with ID:', row.id);
                                            handleDeleteFormOpen();
                                        }}
                                    />
                                )}
                                {type === 'module' && (
                                    // <Table
                                    //     headers={['Module', 'Module Name', '']}
                                    //     rows={courseModuleDetails.map((module) => ({
                                    //         id: module.module_id,
                                    //         cells: [module.module_id, module.module_name, ''],
                                    //     }))}

                                    //     onEdit={(row) => {
                                    //         setEditingRow(row);
                                    //         setValues({
                                    //             module_name: row.cells[1],
                                    //         });
                                    //         console.log('Edit module with ID:', row.id);
                                    //         handleOpen();
                                    //     }}

                                    //     onDelete={(row) => {
                                    //         setDeletingRow(row);
                                    //         setValues({
                                    //             module_name: row.cells[1]

                                    //         });
                                    //         console.log('Delete module with ID: ', row.id)
                                    //         handleDeleteFormOpen();
                                    //     }}
                                    // />
                                    <Table
                                        headers={['Module', 'Course', '']}
                                        rows={courseModuleDetails.map((module) => ({
                                            id: module.module_id,
                                            cells: [module.course_name, module.module_name, ''],
                                        }))}

                                        onEdit={(row) => {
                                            setEditingRow(row);
                                            setValues({
                                                course_module_id: row.cells[0],
                                                module_name: row.cells[1],

                                            });
                                            console.log('Edit module with ID:', row.id);
                                            handleOpen();
                                        }}

                                        onDelete={(row) => {
                                            setDeletingRow(row);
                                            handleDeleteFormOpen();
                                        }}
                                    />
                                )}
                                {type === 'lecture' && (
                                    <Table
                                        headers={['Lecture', 'Lecture Description', 'Lecture Number', 'Video URL', 'Status', '']}
                                        rows={lectureDetails.map((lecture) => ({
                                            id: lecture.lecture_id,
                                            cells: [lecture.lecture_id, lecture.lecture_desc, lecture.lecture_number, lecture.video_URL, lecture.status, ''],
                                        }))}
                                        onEdit={(row) => {
                                            setEditingRow(row);
                                            setValues({
                                                lecture_desc: row.cells[1],
                                                lecture_number: row.cells[2],
                                                video_URL: row.cells[3],
                                                status: row.cells[4],
                                            });
                                            console.log('Edit lecture ID:', row.id);
                                            handleOpen();
                                        }}
                                        onDelete={(row) => {
                                            setDeletingRow(row);
                                            setValues({
                                                lecture_desc: row.cells[1],
                                                lecture_number: row.cells[2],
                                                video_URL: row.cells[3],
                                                status: row.cells[4],
                                            });
                                            console.log('delete lecture with ID: ', row.id)
                                            handleDeleteFormOpen();
                                        }}
                                    />
                                )}
                            </TabsBody>
                        </Tabs>
                    </div>
                </CardBody>
            </Card>
            {/* delete course */}
            <Dialog size="xs" open={deleteFormOpen} handler={handleDeleteFormOpen}>
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Delete Course
                        </Typography>
                        <Typography variant="body2">
                            Are you sure you want to delete the course "{deletingRow?.cells[1]}"?
                        </Typography>
                        <div className="flex gap-4">
                            <Button variant="gradient" className="bg-red cursor-pointer" onClick={deleteCourse}>                                DELETE                            </Button>                            <Button variant="outline" onClick={handleDeleteFormOpen}>
                                CANCEL
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </Dialog>
            {/* end delete course */}
        </div>
    );
};

export default CourseTable;

