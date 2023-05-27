/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProvider';
export default function AllToysTable({ index, toysport }) {
    const { _id, name, seller, subCategory, price, quantity } = toysport;
    const { user } = useContext(AuthContext);

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
        <tr>
            <th scope="row">{index}</th>
            <td>{seller || 'N/A'}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}$</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/toyTabView/${_id}`}><button onClick={handleClick} className="btn btn-primary" >View Details</button></Link>
            </td>
        </tr>
    )
}
