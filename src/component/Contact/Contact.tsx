import React from "react";
import { Box, TextField, Typography, Container } from "@mui/material";
import Grid from '@mui/material/Grid2'
import { StyledButton } from "./style";

const Contact:React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Pigeon, sans-serif",
            fontWeight: "bold",
            mb: 2,
          }}
        >
        Get in touch
        </Typography>
        <Typography
          sx={{ color: "#666", mb: 4 }}
        >
          We'd love to hear from you! Fill out the form below and we'll get in touch with you shortly.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid size={{xs:12,sm:6}}>
          <TextField
            fullWidth
            label="Your Name"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid size={{xs:12,sm:6}}>
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            type="email"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid size={{xs:12}} sx={{ textAlign: "center" }}>
          <StyledButton variant="contained" size="large">
            Send Message
          </StyledButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
