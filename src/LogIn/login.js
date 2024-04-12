import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Typography, Grid } from "@mui/material";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    // Handle submission logic here, like sending data to backend
    axios({
      method: "get",
      url:
        "http://localhost:3000/users?username=" +
        values.username +
        "&password=" +
        values.password,
    }).then(function (response) {
      //response.data;
      if (response.data.length >= 1) {
        return navigate("/home");
      } else {
        alert("Bagim");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2} width="400px">
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Login
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="username"
                  as={TextField}
                  label="Username"
                  variant="outlined"
                  fullWidth
                  error={errors.username && touched.username}
                  helperText={
                    errors.username && touched.username && errors.username
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  as={TextField}
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}
