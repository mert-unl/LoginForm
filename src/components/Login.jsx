import { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input,FormFeedback, Card, CardBody, CardHeader } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom' 

export default function Login() {

  const navigate = useNavigate(); 

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
  
  const errorMessages ={
        email: 'Lütfen geçerli bir email adresi girin',
        password: 'Şifreniz en az 8 karakter olmalı ve en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir',
        terms: 'Şartları kabul etmelisiniz'
  }


    const onHandleChange = (e) => {
      const {name, value, type, checked} = e.target
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      })
    }

  const onHandleSubmit = (e) => {
    e.preventDefault()
      if(!isValid) return

    setFormData(initalValue)

       navigate('/succes')
    }


  useEffect(() => {
    const {email, password, terms} = formData;
    
    // Boş string kontrolü ekleyin
    const emailValid = email.length > 0 && validateEmail(email);
    const passwordValid = password.length > 0 && isStrongPassword(password);
    const termsValid = terms;
  
    setErrors({
      email: email.length > 0 && !emailValid,
      password: password.length > 0 && !passwordValid,
      terms: !termsValid
    });
  
    setIsValid(emailValid && passwordValid && termsValid);
  }, [formData]);

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

<Card>
  <CardHeader>Kayıt Ol</CardHeader>
<CardBody>


<Form onSubmit={onHandleSubmit}>
<FormGroup>
  <Label for="exampleEmail">
    Email
  </Label>
  <Input
    id="exampleEmail"
    name="email"
    placeholder="Email adresinizi girin"
    type="email"
    value={formData.email}
    invalid={errors.email}
    data-cy="email"
    onChange={onHandleChange}
  />
   <FormFeedback>
  {errors.email ? errorMessages.email : ''}
</FormFeedback>

</FormGroup>
<FormGroup>
  <Label for="examplePassword">
    Password
  </Label>
  <Input
    id="examplePassword"
    name="password"
    placeholder="Şifrenizi girin"
    type="password"
    value={formData.password}
    onChange={onHandleChange}
    data-cy="password"
    invalid={errors.password}
  />
   <FormFeedback>
  {errors.password ? errorMessages.password : ''}
</FormFeedback>

</FormGroup>



<FormGroup check>
  <Input id="exampleCheck" type="checkbox"
  invalid={errors.terms}
  checked={formData.terms}
  data-cy="terms"
  onChange={(e) => setFormData({...formData,terms: e.target.checked})}
  />
  {' '}
  <Label check for="exampleCheck">
Şartları Kabul Ediyorum.</Label>
<FormFeedback>
  {errors.terms ? errorMessages.terms : ''}
</FormFeedback>
</FormGroup>

<Button color="primary"  data-cy="submit" type="submit" disabled={!isValid}>
  Kayıt Ol
</Button>
</Form>
</CardBody>

</Card>
  )}