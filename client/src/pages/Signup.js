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
 <div className="container signup-card shadow">
      <Link className="login-link" to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <Form className="sign-form" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3 labels">
          <Form.Label>First Name</Form.Label>
          <FormControl
            type="firstname"
            placeholder="Enter first name"
            id="firstName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 labels">
          <Form.Label>Last Name</Form.Label>
          <FormControl
            type="lastname"
            placeholder="Enter last name"
            id="lastName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 labels">
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

        <Form.Group className="mb-3 labels">
          <Form.Label>Password</Form.Label>
          <FormControl
            type="password"
            placeholder="Password"
            id="pwd"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 labels">
          <Form.Label>How old are you?</Form.Label>
          <FormControl
            type="age"
            placeholder="age"
            id="age"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 labels">
          <Form.Label>What city do you live in?</Form.Label>
          <FormControl
            type="city"
            placeholder="city"
            id="city"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 labels">
          <Form.Label>What is your level of expertise?</Form.Label>
          <FormControl
            type="level"
            placeholder="level"
            id="level"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 labels">
          <Form.Label>Do you drink?</Form.Label>
          <FormControl
            type="drink"
            placeholder="drink"
            id="drink"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 labels">
          <Form.Label>Do you smoke?</Form.Label>
          <FormControl
            type="smoke"
            placeholder="smoke"
            id="smoke"
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="sign-btn shadow" style={{ backgroundColor: "#9db175" }} type="submit">
        ← Submit<Link to="/findplayers"></Link>
        </Button>
      </Form>

    </div>
  );
}

export default Signup;
