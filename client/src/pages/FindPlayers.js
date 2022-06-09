import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import UserCards from "../components/UserCards";
import { Container } from "react-bootstrap";

const FindPlayers = () => {
  // useMutation(getUsers)  use this to getUser information

  //map over the data

  //return back a card for every user that matches the criteria

  //bring in user card component
  //data in each part of the user card
  //data.map pass over the user card
  //<UserCard name={user.name} level={user.level}/>


  const { data, error } = useQuery(QUERY_USERS);
  let user;
  console.log(data);
  console.log(error);

  if (data) {
    user = data.user;
    console.log(user);
  }

  return (
    <>
    <div className="container my-1">
        
          <Link to="/">← Test</Link>

          {user ? (
            <>
              <h2>
                List of Users {user.firstName} {user.lastName}
              </h2>
              {user.map((user) => (
                <div key={user._id} className="my-2">
                  <div className="flex-row">
                    {user.map(
                      (
                        { firstName, lastName, city, level, drink, smoke },
                        index
                      ) => (
                        <div key={index}>
                          <UserCards
                            firstName={firstName}
                            lastName={lastName}
                            city={city}
                            level={level}
                            drink={drink}
                            smoke={smoke}
                          />
                        </div>
                      )
                    )}
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
