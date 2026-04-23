import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router";

interface SignInModel {
  email: string;
  password: string;
}
const navigate=useNavigate()

export const SignIn = () => {
  const [user, setUser] = useState<SignInModel>({
    email: "",
    password: "",
  });

  const handleOnChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
const {login}=useAuth();

  const handleOnSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token=await SignInProcess(user)
    console.log(token);
    setUser({email:"",password:""})
    login(token)
    navigate("/coursematerial")
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login</h1>

      <Form
        onSubmit={handleOnSubmit}
        className="d-flex flex-column align-items-center mt-5"
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button type="submit" variant="success">
          Sign In
        </Button>
      </Form>
    </>
  );
};