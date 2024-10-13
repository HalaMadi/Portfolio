import { Typography, Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import profileImg from "../../assets/Untitled design.png";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import { Element, Link } from "react-scroll";
import { StyledButton } from "./style";

const Home: React.FC = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1,mt:'40px' }}>
      <Element name="home">
          <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                <Box sx={{ justifyContent: { xs: "space-between" } }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#BF888C",
                      fontSize: "24px",
                      fontWeight: "600",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Hi, I'm
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "40px", sm: "45px", md: "100px" },
                      fontFamily: "Playfair Display, serif",
                      lineHeight: 1,
                    }}
                  >
                    Hala Madi
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", sm: "25px", md: "45px" },
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Front-End Developer
                  </Typography>
                  <Box sx={{ mt: "30px", display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#BD6E73" }}
                      href="/HalaMadiCV.pdf"
                      download="Hala Madi CV.pdf"
                    >
                      Download CV
                    </Button>
                    <StyledButton
                      variant="outlined"
                      sx={{
                        borderColor: "#BD6E73",
                        color: "#BD6E73",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        Hire Me
                      </Link>
                    </StyledButton>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                <Box
                  component="img"
                  src={profileImg}
                  sx={{
                    width: "100%",
                    height: { xs: "300px", sm: "350px", md: "450px" },
                    mx: "auto",
                  }}
                  />
              </Grid>
            </Grid>
          </Container>
                  </Element>
          {/* About Me Section */}
          <Element name="about-me">
            <AboutMe />
          </Element>
          {/* Skills Section */}
          <Element name="skills" >
            <Skills />
          </Element>
          {/* Projects Section */}
          <Element name="projects">
            <Projects />
          </Element>
          {/* Contact Section */}
          <Element name="contact">
            <Contact />
          </Element>
        </Box>
    </>
  );
};

export default Home;
