import React, {SyntheticEvent, useState} from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

//IMPORTING COMPONENTS:
import FormContainer from '../components/FormContainer'

function LoginPage() {

  let navigate = useNavigate();

  //CONFIGURING STATES:
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const submitHandler = (e:SyntheticEvent) =>{
    e.preventDefault()

    /* INTERACTION WITH THE BACKEND REQUIRED TO BE INSERTED HERE **/

    console.log("Submitted")

    //redirect user
    navigate("/")
  }


  return (
    <>
    <FormContainer>
      <Card>
      <Card.Header as="h1">LOGIN</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form onSubmit={submitHandler}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              value = {email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              value = {password}
              onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
          <br />
          <Button variant="danger">Login</Button>
      </Form>
        </Card.Text>
      </Card.Body>
    </Card> 
</FormContainer>
</>
  )
}

export default LoginPage