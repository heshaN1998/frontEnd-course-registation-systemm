import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { Interface } from "readline";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router";

export const SignUp = () => {
    interface SignUp{
        firstName:string;
        lastName:string;
        email:string;
        password:string;
        role:string;
    }

    //state handle
    const navigate=useNavigate()
    const { login }=useAuth();
    const [user,setUser]=useState<SignUp>({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        role:""
    })
    //form data handle
    const handleOnChange= async (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setUser((Prev)=>({...Prev,[name]:value}))
    }
    //send sign update to nserver
    const handleOnSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const token=await SignUpProcess(user)
        console.log(token);
        login(token)
    }
          return (
    <>
      <h1 style={{ textAlign: "center" }}>Register</h1>

      <Form className="d-flex flex-column align-items-center mt-4" onSubmit={handleOnSubmit}>

        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={user.lastName}
            name="lastName"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            name="email"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
            <button variant="success" type="submit">Register</button>
           
      </Form>
    </>
  );
};