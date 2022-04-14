
import React, { useState } from 'react'

import {Row,Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


function Login() {
 
    const navigate = useNavigate();
     
  const [validated, setValidated] = useState(false);
  
  const [password, setPassword] = useState('');
  
  const [email, setEmail] = useState('');
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }
  const handleChangeEmail= (event) => {
    setEmail(event.target.value)
    console.log(email)
  }
  const handleSubmit = (event) => {


    const form = event.currentTarget;
    if (form.checkValidity() === true) {
    
        axios.post(`http://localhost:9000/admin/adminLogin`, {password,email  })
        .then(res => {
           if(res.status == 200){
               const role = res.data.role
            const csrf=res.data.csrf;
            /* Le localStorage ne stocke que des chaines de caractères nous devons donc faire appel à la méthode "JSON.stringify" */
               localStorage.setItem('csrfToken',csrf );
               localStorage.setItem('role',role );
               navigate('/');

               
            }
           
        })
     
    }
  
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    
  }
  
  

  return (
    <div className='App d-flex flex-column align-items-center'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group controlId="validationCustom01">
          <Form.Label>E-mail</Form.Label>
          <Form.Control onChange={handleChangeEmail}
            required
            type="email"
            placeholder="votre E-mail"
          
          />
           <Form.Control.Feedback type="invalid">Veuillez saisir une adresse email correcte </Form.Control.Feedback>
          <Form.Control.Feedback>Ce champ semble correcte! </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control onChange={handleChangePassword}
            required
            type="password"
            placeholder="votre mot de passe"
            />
           <Form.Control.Feedback type="invalid">Veuillez saisir votre mot de passe  </Form.Control.Feedback>
          <Form.Control.Feedback>Ce champ semble correcte!</Form.Control.Feedback>
        </Form.Group>
        </Row>
      <Button type="submit">login </Button>
    </Form>
 



    </div>
  );
}

export default Login;
