import React, { useState } from "react";

import "./signup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container signup-card">
      <Link className="login-link" to="/login">← Go to Login</Link>
      <h2>Signup</h2>
      <Form className="sign-form" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3 first-name" id="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <input
            type="firstname"
            placeholder="Enter first name"
            id="firstName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 last-name" id="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <input
            type="lastname"
            placeholder="Enter last name"
            id="lastName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 email" id="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="email" onChange={handleChange}/>
          <Form.Text className="text-muted disclaimer">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 password" id="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input
            type="password"
            placeholder="Password"
            id="pwd"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          ←<Link to="/findplayers">Submit</Link>
        </Button>
      </Form> */

<h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="age">Age:</label>
          <input
            placeholder="type in age"
            name="age"
            type="age"
            id="age"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
