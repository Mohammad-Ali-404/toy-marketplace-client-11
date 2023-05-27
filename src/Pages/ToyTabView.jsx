/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyTabView = () => {
    const toyTabView = useLoaderData();
    const { photoUrl, name, seller, email, price, rating, quantity, description } = toyTabView;
    console.log(toyTabView)
    return (
        <div>
            <div className="container my-5">
                <div className="card d-flex flex-md-row border p-4">
                <img className=" w-25" src={photoUrl} alt="" />
                <div className="card-body mx-5">
                    <h3 className="card-title fw-bolder">Toy name: {name}</h3>
                    <p className="card-text"><span className="fw-bolder">Seller Name:</span> {seller}</p>
                    <p className="card-text"><span className="fw-bolder">Seller Email:</span> {email}</p>
                    <p className="card-text"><span className="fw-bolder">Price:</span> {price}</p>
                    <p className="card-text"><span className="fw-bolder">Rating:</span> {rating}</p>
                    <p className="card-text"><span className="fw-bolder">Quantity:</span> {quantity}</p>
                    <p className="card-text"><span className="fw-bolder">Description:</span> {description}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ToyTabView;