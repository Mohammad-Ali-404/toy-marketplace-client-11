/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const AllToys = () => {
    const toysports = useLoaderData();
    const [search, setSearch] = useState('')
    const [Items, setItems] = useState([]);
    const [limit, setLimit] = useState(20);
    const searchRef = useRef(null)
  
    useEffect(()=>{
         fetch(`http://localhost:5000/jobSearchName?search=${search}`)
          .then((res) => res.json())
          .then((data) => {
            setItems(data);
            setLimit(20);
          })
    },[search])
  
    const handleLoadMore = () => {
      setLimit(prevLimit => prevLimit + 20);
    };
  
    const handleSearch = () => {
      setSearch(searchRef.current.value)
  
    };
  
    const searchResults = Items.length > 0 ? Items : toysports;
  
    return (
        <div>
              <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Seller</th>
                <th scope="col">Toy Name</th>
                <th scope="col">Sub-category</th>
                <th scope="col">Price</th>
                <th scope="col">Available Quantity</th>
                <th scope="col">View Details</th>
              </tr>
            </thead>
            <tbody>
              {/* {searchResults.map((toysport, index) => (
                <AllToysTable
                  key={toysport._id}
                  index={index + 1}
                  toysport={toysport}
                />
              ))} */}
            </tbody>
          </table>
        </div>
    );
};

export default AllToys;