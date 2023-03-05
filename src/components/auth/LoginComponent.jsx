import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React from 'react';
import { redirect } from 'react-router-dom';

import { AuthContext, useAuth } from './AuthProvider';

const LoginComponent = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: {
      onsubmit: (values) => {
        login(values.email, values.password)
          .then(() => {
            redirect('/');
          })
          .catch(() => {});
      },
    },
  });

  return (
    <form
      autoComplete="off"
      noValidate
      style={{ marginTop: '150px' }}
      onSubmit={formik.handleSubmit}
    >
      <Typography>Login</Typography>
      <TextField
        name="email"
        type="email"
        id="email"
        label="Enter your email"
        variant="outlined"
        sx={{
          display: 'block',
          marginBlock: '4px',
        }}
        value={formik.values.email}
        onChange={formik.handleChange}
        helperText={formik.touched.email && formik.errors.email}
        error={formik.errors.email && Boolean(formik.errors.email)}
      />
      <TextField
        name="password"
        type="password"
        id="password"
        label="Enter your password"
        variant="outlined"
        sx={{
          display: 'block',
          marginBlock: '4px',
        }}
        value={formik.values.password}
        onChange={formik.handleChange}
        helperText={formik.touched.password && formik.errors.password}
        error={formik.errors.password && Boolean(formik.errors.password)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          display: 'block',
          marginBlock: '4px',
        }}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginComponent;
