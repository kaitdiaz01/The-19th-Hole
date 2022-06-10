import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import UserCards from "../components/UserCards";

const Favorites = () => {
const { data, error } = useQuery(QUERY_USERS);
  let user;
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
            <h2>Players in our Database</h2>
          </div>
          <div className="flex-row" >
            <UserCards
              firstName={"Jonny "}
              lastName={"Bravo"}
              city={"Orlando"}
              level={"Advanced"}
              drink={"Doesn't mind drinking"}
              smoke={"Okay if the group smokes"}
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
              firstName={"Kyle "}
              lastName={"Driver"}
              city={"Orlando"}
              level={"Advanced"}
              drink={"Okay if the group drinks."}
              smoke={"Okay if the group smokes"}
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

export default Favorites