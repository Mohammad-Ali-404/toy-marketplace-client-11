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
          <div className="flex">
              <div className="input-group w-25  justify-center">
              <input ref={searchRef} type="search" name="Search" placeholder="Search..."  className="input input-bordered input-md w-full max-w-xs" />
                <div className="input-group-append">
                  <button onClick={handleSearch} className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
          </div>
              <table className="table w-full mt-4">
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
              {searchResults.map((toysport, index) => (
                <AllToysTable
                  key={toysport._id}
                  index={index + 1}
                  toysport={toysport}
                />
              ))}
            </tbody>
          </table>
          {limit < searchResults.length && (
          <button className="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        )}
        </div>
    );
};

export default AllToys;