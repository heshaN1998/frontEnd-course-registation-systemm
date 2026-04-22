import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export const SignUp = () => {
    interface SignUp{
        firstName:string;
        lastName:string;
        email:string;
        password:string;
        role:string;
    }

    //state handle
    const [usr,setUser]=useState<SignUp>({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        role:""
    })
    //form data handle
    const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setUser((Prev)=>({...Prev,[name]:value}))
    }
    //send sign update to nserver
    const handleOnSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log();
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
            <button Variant="success" type="submit">Sign Up</button>
            <button Variant="danger" type="reset">Reset</button>
      </Form>
    </>
  );
};