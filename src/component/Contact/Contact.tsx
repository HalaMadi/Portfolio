import React from "react";
import { Box, TextField, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { StyledButton } from "./style";
import Swal from "sweetalert2";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact: React.FC = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Your email is required"),
    Subject: Yup.string().required("Subject is required"),
    Message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    formData.append("access_key", "c10b5a58-1bf8-420d-83d9-2bb25a669fda");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
      });
      resetForm(); 
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 10,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "28px", sm: "32px", md: "36px" },
            display: "flex",
            gap: { xs: "8px", md: "16px" },
            fontFamily: "Kaushan Script, cursive",
            m: "20px",
          }}
        >
          <Box sx={{ color: "#BD6E73", fontSize: "inherit" }}>&lt;</Box>
          Get in touch
          <Box sx={{ color: "#BD6E73", fontSize: "inherit" }}>/&gt;</Box>
        </Typography>
        <Typography sx={{ color: "#666", mb: 4, fontFamily: "Inter" }}>
          I'd love to hear from you! Fill out the form below and we'll get in
          touch with you shortly.
        </Typography>
      </Box>

      <Formik
        initialValues={{ name: "", email: "", Subject: "", Message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Your Name"
                  error={touched.name && !!errors.name}
                  helperText={<ErrorMessage name="name" />}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Your Email"
                  type="email"
                  error={touched.email && !!errors.email}
                  helperText={<ErrorMessage name="email" />}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Field
                  as={TextField}
                  fullWidth
                  name="Subject"
                  label="Subject"
                  error={touched.Subject && !!errors.Subject}
                  helperText={<ErrorMessage name="Subject" />}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Field
                  as={TextField}
                  fullWidth
                  name="Message"
                  label="Message"
                  multiline
                  rows={6}
                  error={touched.Message && !!errors.Message}
                  helperText={<ErrorMessage name="Message" />}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
                <StyledButton type="submit" variant="contained" size="large">
                  Send Message
                </StyledButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;
