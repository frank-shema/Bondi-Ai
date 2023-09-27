import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        // Handle form submission here, e.g., make an API call
        console.log(values);

        // Assuming the login is successful, redirect to the main page
        navigate('/main'); // Use navigate to redirect
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className='w-full h-full flex justify-center items-center p-4 overflow-y-auto font-lato '>
      <div className='w-full md:w-[70%] lg:w-[40%]  bg-white rounded-2xl shadow-lg py-5  px-16 h-[80%]'>
        <div className="w-full h-full flex flex-col items-center gap-x-20 mt-20">
          <div className="flex gap-2 items-center">
            <img src="/svg/logo.svg" alt="" className='w-[40%]' />
            <p className="text-[#108A00] text-[24px] font-bold">Bondi Ai</p>
          </div>
          <p className='my-3 text-[30px] font-bold  text-[#2A2A2B]'>Login to your account</p>
          <p className='my-2   text-[#636365]'>Welcome back! Please enter your details.</p>
          <form onSubmit={formik.handleSubmit} className='my-3 w-full'>
            <p className="font-medium text-[#636365]" >Username</p>
            <input
              type="text"
              name="username"
              placeholder='Enter Username'
              className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">{formik.errors.username}</div>
            ) : null}
            <p className="font-medium text-[#636365] mt-3" >Password</p>
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
            <div className="my-3 w-full flex justify-between items-center">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className='text-[#818284] font-medium text-sm'>Remember for 20 days</p>
              </div>
              <p className="text-sm text-[#108A00]">Forgot Password</p>
            </div>
            <input
              type="submit"
              value="Sign in"
              className='bg-[#108A00] px-4 py-2.5 rounded-md text-[#FBFBFB] font-bold text-sm my-2 w-full cursor-pointer'
              disabled={formik.isSubmitting}
            />
            <div className="flex w-full justify-center">
              <p className='text-[#636365] text-sm'>Don’t have an account?</p>
              <Link to={"/signup"} className='font-bold text-[#108A00] text-sm'>Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
