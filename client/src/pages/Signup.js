import React, { useState } from "react";

import "./signup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { FormControl } from "react-bootstrap";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        age: formState.age,
        city: formState.city,
        level: formState.level,
        drink: formState.drink,
        smoke: formState.smoke,
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
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <FormControl
            type="firstname"
            placeholder="Enter first name"
            id="firstName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <FormControl
            type="lastname"
            placeholder="Enter last name"
            id="lastName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <FormControl
            type="email"
            placeholder="Enter email"
            id="email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <FormControl
            type="password"
            placeholder="Password"
            id="pwd"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>How old are you?</Form.Label>
          <FormControl
            type="age"
            placeholder="age"
            id="age"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>What city do you live in?</Form.Label>
          <FormControl
            type="city"
            placeholder="city"
            id="city"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>What is your level of expertise?</Form.Label>
          <FormControl
            type="level"
            placeholder="level"
            id="level"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Do you drink?</Form.Label>
          <FormControl
            type="drink"
            placeholder="drink"
            id="drink"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Do you smoke?</Form.Label>
          <FormControl
            type="smoke"
            placeholder="smoke"
            id="smoke"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          ←<Link to="/findplayers">Submit</Link>
        </Button>
      </Form>

      {/* <h2>Signup</h2>
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
      </form> */}
    </div>
  );
}

export default Signup;
