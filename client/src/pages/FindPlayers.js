import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import UserCards from "../components/UserCards";
import './findplayers.css'

const FindPlayers = () => {
  // useMutation(getUsers)  use this to getUser information

  //map over the data

  //return back a card for every user that matches the criteria

  //bring in user card component
  //data in each part of the user card
  //data.map pass over the user card
  //<UserCard name={user.name} level={user.level}/>


  const { data, error } = useQuery(QUERY_USER);
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


        <>
          <div>
            <h2 className="all-players-title">Players in our Database</h2>
          </div>
          <div className="flex-row all-players">
            <UserCards
              firstName={"Nick "}
              lastName={"Quinn"}
              city={"Washington"}
              level={"Advanced"}
              drink={"Okay if the group drinks."}
              smoke={"Okay if the group smokes"}
            />

            <UserCards
              firstName={"Jonny "}
              lastName={"Bravo"}
              city={"Orlando"}
              level={"Advanced"}
              drink={"Doesn't mind drinking"}
              smoke={"Okay if the group smokes"}
            />
            <UserCards
              firstName={"Jason "}
              lastName={"Mamoa"}
              city={"LA"}
              level={"Medium"}
              drink={"Doesn't mind drinking"}
              smoke={"Minds if someone smokes"}
            />
            <UserCards
              firstName={"Tiger "}
              lastName={"Woods"}
              city={"Jupiter"}
              level={"Professional"}
              drink={'Minds if someone drinks'}
              smoke={"Minds if someone smokes"}
            />
            <UserCards
              firstName={"John "}
              lastName={"Smith"}
              city={"Orlando"}
              level={"Beginner"}
              drink={"Okay if the group drinks."}
              smoke={"Okay if the group smokes"}
            />
            <UserCards
              firstName={"Jalen "}
              lastName={"Suggs"}
              city={"Orlando"}
              level={"Beginner"}
              drink={"Okay if the group drinks."}
              smoke={"Okay if the group smokes"}
            />
            <UserCards
              firstName={"Angela "}
              lastName={"White"}
              city={"Orlando"}
              level={"Beginner"}
              drink={"Okay if the group drinks."}
              smoke={"Okay if the group smokes"}
            />
            <UserCards
              firstName={"Mark "}
              lastName={"Down"}
              city={"Washington"}
              level={"Medium"}
              drink={'Minds if someone drinks'}
              smoke={"Okay if the group smokes"}
            />
            <UserCards
              firstName={"Patatas "}
              lastName={"Bravas"}
              city={"LA"}
              level={"Beginner"}
              drink={'Minds if someone drinks'}
              smoke={"Okay if the group smokes"}
            />
            <UserCards
              firstName={"Producer "}
              lastName={"Guy"}
              city={"LA"}
              level={"Advanced"}
              drink={"Okay if the group drinks."}
              smoke={"Okay if the group smokes"}
            />
            <UserCards
              firstName={"Kyle "}
              lastName={"Driver"}
              city={"Orlando"}
              level={"Advanced"}
              drink={"Okay if the group drinks."}
              smoke={"Okay if the group smokes"}
            />
            <UserCards
              firstName={"Lexi "}
              lastName={"Thomopson"}
              city={"Jupiter"}
              level={"Professional"}
              drink={'Minds if someone drinks'}
              smoke={"Minds if someone smokes"}
             
            />

          </div>

        </>
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
                          firstName={"Nick"}
                          lastName={"Quinn"}
                          city={"Washington"}
                          level={"Advanced"}
                          drink={"true"}
                          smoke={"false"}
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
