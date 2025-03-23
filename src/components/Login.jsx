import { use, useState } from 'react'
import React from "react"
import ReactDOM from "react-dom"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Login() {
const initalValue = {
    email: '',
    password: '',
    terms: false
}

const [formData,setFormData] = useState(initalValue)
    const [isValid,setIsValid] = useState(false)

    const [errors,setErrors] = useState({
       email: false,
         password: false,
            terms: false,
    })

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!?])[A-Za-z\d@#$%^&*!?]{8,32}$/;

     function isStrongPassword(password) {
       return strongPasswordRegex.test(password);
     }


    return (

<Form>
<FormGroup>
  <Label for="exampleEmail">
    Email
  </Label>
  <Input
    id="exampleEmail"
    name="email"
    placeholder="with a placeholder"
    type="email"
  />
</FormGroup>
<FormGroup>
  <Label for="examplePassword">
    Password
  </Label>
  <Input
    id="examplePassword"
    name="password"
    placeholder="password placeholder"
    type="password"
  />
</FormGroup>



<FormGroup check>
  <Input type="checkbox" />
  {' '}
  <Label check>
    Check me out
  </Label>
</FormGroup>
<Button>
  Submit
</Button>
</Form>
  )}