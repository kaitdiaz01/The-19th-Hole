import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import UserCards from '../components/UserCards';

const FindPlayers = () => {
    // useMutation(getUsers)  use this to getUser information

    //map over the data

    //return back a card for every user that matches the criteria

    //bring in user card component
    //data in each part of the user card
    //data.map pass over the user card
    //<UserCard name={user.name} level={user.level}/>

    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>
            <div className="container my-1">
                <Link to="/">← </Link>

                {user ? (
                    <>
                        <h2>
                            Order History for {user.firstName} {user.lastName}
                        </h2>
                        {user.orders.map((order) => (
                            <div key={order._id} className="my-2">
                                <h3>
                                    {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                </h3>
                                <div className="flex-row">
                                    {order.products.map(({ _id, image, name, price }, index) => (
                                        <div key={index} className="card px-1 py-1">
                                            <Link to={`/products/${_id}`}>
                                                <img alt={name} src={`/images/${image}`} />
                                                <p>{name}</p>
                                            </Link>
                                            <div>
                                                <span>${price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                ) : null}
            </div>
        </>
    );
};


export default FindPlayers;