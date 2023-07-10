import React, { useState, useEffect } from 'react'
import { Link, Button, InputAdornment, TextField, FormControl, InputLabel, OutlinedInput, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  InstagramLoginButton,
  AppleLoginButton,
} from 'react-social-login-buttons'
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import {useAuth} from '../contexts/AuthContext';


export default function Login() {

  const navigate = useNavigate();

  const initialValues = { name: "", pwd: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  //   const {login, currentUser} = useAuth()



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {

    console.log('handle submit pressed');

    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(values.name))
      errors.name = "username/e-mail is Invalid";

    if (values.pwd.length < 6)
      errors.pwd = "Invalid password";

    return errors;
  }

  const logIn = async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      try {
        setLoading(true);
        // await login(formValues.name,formValues.pwd);
        // <Link to= 'h' />
        navigate("/home");
      } catch (err) {
        console.log(err);
      }
      setLoading(false);

    }

    else
      console.log(formErrors);
  }

  useEffect(() => {
    logIn();


  }, [formErrors])


  return (
    <div className='App'>
      <div style={{ padding: 50, paddingBottom: 70, paddingTop: 70, backgroundColor: 'white', borderRadius: '10px' }}>
        <form>
          <h3>Log In</h3>

          <div style={{ display: 'flex', alignItems: 'center', flexDirection: "column", alignContent: 'center', height: 220, width: 300, justifyContent: 'space-between' }}>

            <TextField
              error={!!formErrors.name}
              name='name'
              type='email'
              helperText={formErrors.name}
              variant="outlined"
              fullWidth
              label="E-mail"
              onChange={handleChange}

            />

            {/* <InputLabel error={!!formErrors.pwd} htmlFor="outlined-adornment-password">Password</InputLabel>         */}
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
            {/* <p style={{display:'flex',marginLeft:17,marginTop:-0.1, color:'#d32f2f'}} >{formErrors.pwd}</p> */}

            <Link fontSize={12.5} onClick={() => { navigate("/forgot") }}>Forgot password?</Link>
            <Button variant='contained' disabled={loading} onClick={handleSubmit}>Log In</Button>
          </div>
        </form>
        <p style={{ fontSize: 14, marginTop: 5}}>don't have an account? <Link component="button" fontSize={12.5} onClick={() => { navigate("/Register") }}>Click here to Register</Link></p>
        <p style={{ fontSize: 20 }}>or</p>
        <div>
          <GoogleLoginButton size='40px' />
          <FacebookLoginButton size='40px' />
          < InstagramLoginButton size='40px' />
          <AppleLoginButton size='40px' />
        </div>
      </div>
    </div>
  )
}