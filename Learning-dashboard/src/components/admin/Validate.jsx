import * as Yup from 'yup'

export const Validate = Yup.object({
    course_name: Yup.string.min(3).required("Enter Course Name"),
    course_desc: Yup.string().min(3).required("Enter Course Description"),
    category: Yup.string().min(3).required("Enter Course Category"),
})