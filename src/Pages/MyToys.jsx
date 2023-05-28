/* eslint-disable no-unused-vars */
import React from 'react'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import MyToysView from '../components/MyToysView'
import { AuthContext } from '../Providers/AuthProvider'
import ToyZoneTitle from '../TitleHook/ToyZoneTitle'
export default function MyToys() {
  ToyZoneTitle('MyToys')
  const { user } = useContext(AuthContext)
  const [items, setItems] = useState([])
  const [asc,setAsc] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/addtoy?email=${user.email}&sort=${asc ? 'asc' : 'desc'}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
    }
  }, [user?.email, asc]);
  

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addtoy/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remeaining = items.filter(dlt => dlt._id !== _id)
              setItems(remeaining)
            }
          })
      }
    })
  }

  return (
    <div>
      <div className="container my-5">
      <div className="flex justify-center mb-5 mt-5">
  <label htmlFor="sort" className=" fs-4 me-2">
    Sort By:
  </label>
  <select
    name="sort"
    id="sort"
    className="rounded py-2 px-2 shadow"
    onChange={(e) => setAsc(e.target.value === 'asen')}
  >
    <option value={'asen'}>Price (Low to High)</option>
    <option value={'dese'}>Price (High to Low)</option>
  </select>
</div>


        <table className="table table-striped w-full">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <MyToysView key={item._id} handleDelete={handleDelete} index={index + 1} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

