import React, { useState } from "react";

import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container login-card shadow p-3 mb-5">
      <Link className= "signup-link" to="/signup">← Go to Signup</Link>
      <h2>Login</h2>
      <Form className="log-form" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3 email" id="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            onChange={handleChange}
          />
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
  );
}
        /*  <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}*/

export default Login;
