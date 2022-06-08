import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

// guseMutation(getUsers)

//map over the data
//return back a card for every user that matches the criteria
//bring in user card component
    //data in each part of the user card
        //data.map pass over the user card
            //<UserCard name={user.name} level={user.level}/>