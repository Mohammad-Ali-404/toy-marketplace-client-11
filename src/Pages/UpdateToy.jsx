/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2'
export default function UpdateToy() {
    const sportz = useLoaderData();
    const { _id, price, quantity, details } = sportz;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
    
        const newToy ={ price, quantity, details};
    
        //send data to the server
        fetch(`http://localhost:5000/addtoy/${_id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.modifiedCount>0){
            Swal.fire({
                title: 'success!',
                text: 'ToySportz Update successfully',
                icon: 'success',
                confirmButtonText: 'okay'
              })
              form.reset()
        }

        })
    
      }

    return (
         <div>
            <div className="container my-5">
                <h2 className="text-center mb-5">Update My Toy</h2>
               <div className="card p-4 mx-auto" style={{ maxWidth: '500px' }}>
            <form onSubmit={handleUpdate}>
               <div className="form-control">
               <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                        <label className="label">
                            <span className="label-text">Toy Details</span>
                            
                        </label>
                        <textarea name="Toy Details"
                                rows="5"
                                defaultValue={details} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        <label className="label"></label>
                        <button className="btn btn-primary btn" type="submit">
                            Add Toy
                        </button>
                    </div>
            </form>
               </div>
            </div>
        </div>
    )
}
