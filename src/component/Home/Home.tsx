import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import profileImg from "../../assets/Untitled design.png";
import AboutMe from "../AboutMe/AboutMe";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import WebIcon from "@mui/icons-material/Web";
const Home: React.FC = () => {
 
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: { xs: "0px", sm: "30px", md: "60px" } }}>
          <Grid container spacing={2} alignItems="center">
          
            <Grid size={{ xs: 12, sm: 8, md: 7 }}>
              <Box
                sx={{
                  justifyContent: { xs: "center" },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#BF888C",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  Hi, I'm
                </Typography>
                <Typography
                  sx={{
                    color: "#1A2614",
                    fontSize: { xs: "40px", sm: "45px", md: "100px" },
                    fontFamily: "Inter",
                    lineHeight: 1,
                  }}
                >
                  Hala Madi
                </Typography>
                <Typography
                  sx={{
                    color: "#1A2614",
                    fontSize: { xs: "20px", sm: "25px", md: "45px" },
                    fontFamily: "Inter",
                  }}
                >
                  Front-End Developer
                </Typography>
                {/* <Typography>
                  passionate about creating responsive, user-friendly web
                  interfaces. I love turning ideas into polished digital
                  experiences with a focus on detail and design.
                </Typography> */}
                <Box sx={{ mt: "30px", display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#BD6E73" }}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#BD6E73", color: "#BD6E73" }}
                  >
                    Contact
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 5 }}>
              <Box
                component="img"
                src={profileImg}
                sx={{
                  width: "100%",
                  height: { xs: "300px", md: "500px" },
                  mx: "auto",
                  display: "block",
                }}
              />
            </Grid>
          </Grid>
        
          <AboutMe/>
      </Box>
    </>
  );
};

export default Home;
