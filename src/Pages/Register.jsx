/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProvider';
const Register = () => {
    const { createUser, updateUserData, logOut } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleRegister = (event) =>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;

        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;
        }

        // Create user
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                toast.success('Your Registration Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                form.reset()
                updateUserData(result.user, name, photo);
                logOut();
            })
            .catch(error => {
                setError(error.message);
                form.reset()
            })
    }
    return (
        <div>
           <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto mb-8 mt-8 dark:text-gray-100 bg-gray-300">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleRegister}>
                <div  className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" required/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                            <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Enter your photo" name='photoURL' className="input input-bordered" required/>
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                    <label className="label">
                    <p>Already have an account Please <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                    </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-primary" type='submit'>Register</button>
                </div>
                <p className='text-red-800'></p>
                <p className='text-green-600'></p>
            </div>
                </form>

            </div>
        </div>
    );
};

export default Register;