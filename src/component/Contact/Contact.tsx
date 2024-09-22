import React from "react";
import { Box, TextField, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { StyledButton } from "./style";

const Contact: React.FC = () => {
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
        <Typography sx={{ color: "#666", mb: 4 ,fontFamily:'Inter'}}>
          I'd love to hear from you! Fill out the form below and we'll get in
          touch with you shortly.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Your Name" sx={{ mb: 2 }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            type="email"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
          <StyledButton variant="contained" size="large">
            Send Message
          </StyledButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
