import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
        const validationSchema = Yup.object({
                firstname: Yup.string().required('First Name is required'),
                lastname: Yup.string().required('Last Name is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        });

        const formik = useFormik({
                initialValues: {
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                },
                validationSchema,
                onSubmit: (values) => {
                        // Handle form submission here, e.g., make an API call
                        console.log(values);
                },
        });

        return (
                <div className='w-full h-full flex justify-center items-center overflow-y-auto p-5 font-lato'>
                        <div className='w-full md:w-[70%] lg:w-[40%]  bg-white rounded-2xl shadow-lg py-5 px-16 h-[90%]'>
                                <div className="w-full h-full flex flex-col items-center  gap-x-20 mt-20">
                                        <div className="flex gap-2 items-center">
                                                <img src="/svg/logo.svg" alt="" className='w-[40%]' />
                                                <p className="text-[#108A00] text-[24px] font-bold">Bondi Ai</p>
                                        </div>
                                        <p className='my-3 text-[30px] font-bold  text-[#2A2A2B]'>Register</p>
                                        <form onSubmit={formik.handleSubmit} className='my-3 w-full'>
                                                <div className="my-3">
                                                        <p className="font-medium text-[#636365]" >Firstname</p>
                                                        <input
                                                                type="text"
                                                                name="firstname"
                                                                placeholder='Enter Firstname'
                                                                className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none'
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.firstname}
                                                        />
                                                        {formik.touched.firstname && formik.errors.firstname ? (
                                                                <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
                                                        ) : null}
                                                </div>
                                                <div className="my-3">
                                                        <p className="font-medium text-[#636365]" >Lastname</p>
                                                        <input
                                                                type="text"
                                                                name="lastname"
                                                                placeholder='Enter Lastname'
                                                                className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none'
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.lastname}
                                                        />
                                                        {formik.touched.lastname && formik.errors.lastname ? (
                                                                <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
                                                        ) : null}
                                                </div>
                                                <div className="my-3">
                                                        <p className="font-medium text-[#636365]" >Email</p>
                                                        <input
                                                                type="text"
                                                                name="email"
                                                                placeholder='Enter Email'
                                                                className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none'
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.email}
                                                        />
                                                        {formik.touched.email && formik.errors.email ? (
                                                                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                                        ) : null}
                                                </div>
                                                <div className="my-3">
                                                        <p className="font-medium text-[#636365]" >Password</p>
                                                        <input
                                                                type="password"
                                                                name="password"
                                                                placeholder='Enter Password'
                                                                className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none'
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.password}
                                                        />
                                                        {formik.touched.password && formik.errors.password ? (
                                                                <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                                        ) : null}
                                                </div>
                                                <input
                                                        type="submit"
                                                        value="Sign up"
                                                        className='bg-[#108A00] px-4 py-2.5 rounded-md text-[#FBFBFB] font-bold text-sm my-2 w-full cursor-pointer'
                                                        disabled={formik.isSubmitting}
                                                />
                                                <div className="flex w-full justify-center">
                                                        <p className='text-[#636365] text-sm'>Already have an account?</p>
                                                        <Link to={"/"} className='font-bold text-[#108A00] text-sm'>Login</Link>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default Signup;
