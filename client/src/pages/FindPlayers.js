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
                            List of Users {user.firstName} {user.lastName}
                        </h2>
                        {user.map((user) => (
                            <div key={user._id} className="my-2">
                                <div className="flex-row">
                                    {user.map(({ _id, firstName, lastName, city, level, drink, smoke }, index) => (
                                        <div>
                                            <UserCards firstName = {user.firstName} lastName = {user.lastName} city = {user.city} level = {user.level} drink ={user.drink} smoke = {user.smoke} /> 

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