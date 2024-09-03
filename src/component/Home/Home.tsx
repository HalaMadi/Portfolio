import { Typography, Box, Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import profileImg from "../../assets/Untitled design.png";
const Home: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 6 }}>
        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            <Grid size={6} sx={{mt: 20 }}>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ display: "block",color:'#BF888C' ,fontSize:'24px',fontWeight:'600'}}
                >
                  Hi, I'm
                </Typography>
                <Typography variant="h1" sx={{color:'#1A2614'}}>Hala Madi</Typography>
                <Typography variant="h4" gutterBottom>
                  FrontEnd Developer
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur
                </Typography>
                <Box sx={{ mt: "30px", display: "flex", gap: 2 }}>
                  <Button variant="contained">Download CV</Button>
                  <Button variant="outlined">Contact</Button>
                </Box>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box component="img" src={profileImg} 
              sx={{
                maxWidth:'90%',
                height:'auto',
                mx:'auto',
                display:"block"
              }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
