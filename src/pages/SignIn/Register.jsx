import React, { useState, useEffect } from 'react'
import { Link, Button, InputAdornment, TextField, InputLabel, OutlinedInput, IconButton, Input, FormControl, formControlClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AppleLoginButton,
  InstagramLoginButton,
} from 'react-social-login-buttons'

// import { useAuth } from '../contexts/AuthContext';ś

export default function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = { name: "", ph: "", email: "", pwd: "", cpwd: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const {signup, currentUser} = useAuth()

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const register = async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        setErrorMessage("");
        setLoading(true)
        //   await signup(formValues.email, formValues.pwd, formValues.name, formValues.ph);
        navigate("/Home");
      } catch (err) {
        setErrorMessage("Failed to Login")
        console.log(err);
      }
      setLoading(false)
      console.log(formValues);
    }
    else
      console.log(formErrors);
  }

  useEffect(() => {
    register();
  }, [formErrors])

  const validate = (values) => {
    const errors = {};

    if (values.name.length < 3)
      errors.name = "username should be atleast 3 Letters";

    let em = values.email;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email))
      errors.email = "email format is Invalid";

    if (values.ph.length != 10)
      errors.ph = "mobile number should contain 10 digit"

    if (values.pwd.length < 6)
      errors.pwd = "password length must be atleat 6 characters"

    if (values.cpwd == "" || values.cpwd != values.pwd)
      errors.cpwd = "password confirmation does not match"

    return errors;
  }

  const handleSubmit = (e) => {

    console.log('handle submit pressed');
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  return (
    <div className='App'>
      <div style={{ padding: 50,paddingBottom: 50, paddingTop: 50,  backgroundColor: 'white', borderRadius: '10px' }}>
        <form >
          <h3>Register</h3>
          {/* <div style={{}}>{errorMessage}</div> */}
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: "column", height: 350, width: 300, justifyContent: 'space-between' }}>
            {/* {currentUser && currentUser.email} */}
            <TextField
              fullWidth
              type='email'
              name='name'
              label="Username"
              variant="outlined"
              error={!!formErrors.name}
              helperText={formErrors.name}
              onChange={handleChange}
            />
            <TextField
              name='email'
              error={!!formErrors.email}
              helperText={formErrors.email}
              fullWidth
              label="E-mail"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              name='ph'
              error={!!formErrors.ph}
              helperText={formErrors.ph}
              fullWidth
              label="Mobile Number"
              variant="outlined"

              onChange={handleChange}
            />

            <TextField
              error={!!formErrors.pwd}
              name='pwd'
              type='password'
              helperText={formErrors.pwd}
              variant="outlined"
              fullWidth
              label="Password"
              onChange={handleChange}
            />

            <TextField
              error={!!formErrors.cpwd}
              name='cpwd'
              type='password'
              helperText={formErrors.cpwd}
              variant="outlined"
              fullWidth
              label="Confirm Password"
              onChange={handleChange}
            />

            <Button variant='contained' disabled={loading} onClick={handleSubmit}>Register</Button>
          </div>
        </form>
        <p style={{ fontSize: 16, marginTop: 5 }}>already have an account? <Link component="button" fontSize={13} onClick={() => { navigate("/") }}>Log in</Link></p>
        <p style={{ fontSize: 20 }}>or</p>
        <div>
          <GoogleLoginButton size='40px' />
          <FacebookLoginButton size='40px' />
          <InstagramLoginButton size='40px' />
          <AppleLoginButton size='40px' />
        </div>
      </div>

    </div>
  )
}