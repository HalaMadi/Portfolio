import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import profileImg from "../../assets/Untitled design.png";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Home: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: { xs: "0px", sm: "30px", md: "60px" } }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, sm: 8, md: 7 }}>
            <Box sx={{ justifyContent: { xs: "center" } }}>
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
                  fontFamily: 'Sail ,system-ui',
                  fontWeight: '400',
                  fontStyle: 'normal',
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
              <Box sx={{ mt: "30px", display: "flex", gap: 2 }}>
                <Button variant="contained" sx={{ backgroundColor: "#BD6E73" }}>
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

        {/* About Me Section */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "30px", md: "36px" },
              textAlign: "center",
              color: "#1A2614",
              mb: 4,
            }}
          >
            About Me
          </Typography>
          <AboutMe />
        </Box>

        {/* Skills Section */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "30px", md: "36px" },
              textAlign: "center",
              color: "#1A2614",
              mb: 4,
            }}
          >
            Skills
          </Typography>
          <Skills />
          <Projects />
          <Contact />
        </Box>
      </Box>
    </>
  );
};

export default Home;
