/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import ToyZoneTitle from '../TitleHook/ToyZoneTitle';
const Login = () => {
  ToyZoneTitle('Login')
    const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const [succes, setSuccess] = useState();
  const [error, setError] = useState()

  const handleLogin = event => {
    event.preventDefault();
    setSuccess('')
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login Succssfully done ',
          showConfirmButton: false,
          timer: 1500
      })
        form.reset()
        navigate(from, {replace:true})
      })
      .catch(error => {
        setError("Email or password is incorrect");
        form.reset()
      })
  }
  
  const handleGoogleLogin = () => {
    signInWithGoogle()

      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace:true})
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login Successfull ',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        console.error(error);
      });
    }
    return (
        <div>
           <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto mb-8 mt-8 dark:text-gray-100 bg-gray-300">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogin} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email"  placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password"  placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="btn btn-primary" type='submit'>Sign in</button>
                
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button  onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-lg text-3xl">
                        <FcGoogle></FcGoogle>
                    </button>
                </div>
                <p className="text-sm text-center sm:px-6 dark:text-gray-400">Don't have an account? 
                    <Link to='/register'  className="underline dark:text-gray-100"> Sign up</Link>
                </p>
                </form>
            </div>
        </div>
    );
};

export default Login;