/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyZoneTitle from '../TitleHook/ToyZoneTitle';

const ToyTabView = () => {
    ToyZoneTitle('ToyDetails')
    const toyTabView = useLoaderData();
    const { photoUrl, name, seller, SellerEmail, price, rating, quantity, details } = toyTabView;
    console.log(toyTabView)
    return (
        <div>
            <div className="card my-5 w-96">
                <div className="card d-flex flex-md-row border p-4">
                <img className="w-40 h-40 mx-auto" src={photoUrl} alt="" />
                <div className="card-body mx-auto">
                    <h3 className="card-title fw-bolder">Toy name: {name}</h3>
                    <p className="card-text"><span className="fw-bolder">Seller Name:</span> {seller}</p>
                    <p className="card-text"><span className="fw-bolder">Seller Email:</span> {SellerEmail}</p>
                    <p className="card-text"><span className="fw-bolder">Price:</span> {price}$</p>
                    <p className="card-text"><span className="fw-bolder">Rating:</span> {rating}</p>
                    <p className="card-text"><span className="fw-bolder">Quantity:</span> {quantity}</p>
                    <p className="card-text"><span className="fw-bolder">Description:</span> {details}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ToyTabView;