/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const AddToys = () => {
    const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photo.value;

        const newtoy = {name, quantity, seller, email, category, details, photoUrl};
        console.log(newtoy)
        // send added toy data
        fetch('http://localhost:5000/addtoy', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newtoy)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        // <div>
        //     <h1 className='text-4xl text-center font-extrabold'>Add Toy</h1>
        // </div>
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl mb-8 text-center font-extrabold">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="seller email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toys" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddToys;