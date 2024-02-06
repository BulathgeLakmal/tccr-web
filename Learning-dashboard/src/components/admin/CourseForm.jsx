import React, { useState, useEffect } from 'react';
import { Button, Dialog, Card, CardBody, CardFooter, Input, Typography } from '@material-tailwind/react';
import { useFormik } from 'formik';
import axios from 'axios';

const CourseForm = ({ isOpen, onClose, onSubmit, editingRow }) => {
    const [loading, setLoading] = useState(false);

    const initialValues = {
        course_name: '',
        course_desc: '',
        category: '',
    };

    const { values, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            setLoading(true);

            try {
                let res;
                if (editingRow) {
                    res = await axios.put(`http://localhost:8080/course/${editingRow.id}`, values);
                } else {
                    res = await axios.post('http://localhost:8080/course', values);
                }

                if (res.status === 200) {
                    const updatedCourseDetails = await axios.get('http://localhost:8080/course');
                    onSubmit(updatedCourseDetails.data);
                    setLoading(false);
                    onClose();
                }
            } catch (error) {
                setLoading(false);
                console.error(`Error ${editingRow ? 'updating' : 'creating'} course:`, error);
            }
        },
    });

    useEffect(() => {
        if (editingRow) {
            setValues({
                course_name: editingRow.cells[1],
                course_desc: editingRow.cells[2],
                category: editingRow.cells[3],
            });
        }
    }, [editingRow, setValues]);

    return (
        <Dialog size="xs" open={isOpen} handler={onClose}>
            <Card className="mx-auto w-full max-w-[24rem]">
                <form onSubmit={handleSubmit}>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            {editingRow ? 'Edit Course' : 'Create Course'}
                        </Typography>
                        <Input label="Course Name" size="lg" name="course_name" value={values.course_name} onChange={handleChange} />
                        <Input label="Course Description" size="lg" name="course_desc" value={values.course_desc} onChange={handleChange} />
                        <Input label="Category" size="lg" name="category" value={values.category} onChange={handleChange} />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type="submit" variant="gradient" className="bg-purple cursor-pointer" fullWidth>
                            {editingRow ? 'UPDATE' : 'CREATE'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </Dialog>
    );
};

export default CourseForm;
