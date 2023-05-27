/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { AuthContext } from "../Providers/AuthProvider";

const TabviewDetails = ({ allCategory, subCategory, altText }) => {
    const {user} = useContext(AuthContext)
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    const handleClick = () => {
        if (user) {

        } else {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Please Login !!',
                showConfirmButton: false,
                timer: 1500
            })

        }
    };
    return (
        <div data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500" className="row row-cols-1 row-cols-sm-4 row-cols-md-4 justify-content-center mx-auto mt-5 mb-5 gap-4">
            {allCategory
                .filter((category) => category.subCategory === subCategory)
                .map((item) => (
                    <div key={item._id} className="">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.photoUrl} alt={altText} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: {item.name}</h2>
                                <p>Price: {item.price}</p>
                                <p>Rating: {item.rating}</p>
                                <div className="card-actions justify-content-end">
                                    <Link to={`/TabviewDetailsallinfo/${item._id}`}><button onClick={handleClick}  className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card bg-light shadow">
                           
                              <figure><img src={item.photoUrl} alt={altText} /></figure>

                            <div className="card-body">
                                <h3 className="card-title">Name: {item.name}</h3>
                                <p>Price: {item.price}</p>
                                <p>Rating: {item.rating}</p>
                                <div className="card-actions justify-content-end">
                                    <Link to={`/TabviewDetailsallinfo/${item._id}`}><button onClick={handleClick}  className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                ))}
        </div>
    );
};

export default TabviewDetails;
