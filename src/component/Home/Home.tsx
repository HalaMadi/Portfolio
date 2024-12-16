import { Typography, Box, Button, Container } from "@mui/material";
import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import svgPic from "../../assets/svg/polygon-scatter-haikei.svg";
const Home: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${svgPic})`,
          backgroundSize: "cover",
          minHeight: { sm: "50vh", md: "90vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Element name="home">
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: "30px",
                p: "20px",
              }}
            >
              <Typography
                component={motion.p}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  ease: "easeIn",
                  duration: 1,
                  opacity: { duration: 1 },
                }}
                variant="caption"
                sx={{
                  color: "#BF888C",
                  fontSize: "24px",
                  fontWeight: "300",
                  fontFamily: "Inter, serif",
                  letterSpacing: "1px",
                }}
              >
                Hi, I'm
              </Typography>
              <Typography
                component={motion.p}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  ease: "easeIn",
                  duration: 1,
                  opacity: { duration: 0.6 },
                }}
                sx={{
                  fontSize: { xs: "50px", sm: "90px", md: "100px" },
                  fontFamily: "Inter, serif",
                  lineHeight: 1,
                  color: "#333",
                }}
              >
                Hala Madi
              </Typography>
              <Typography
                component={motion.p}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  ease: "easeIn",
                  duration: 1,
                  opacity: { duration: 0.6 },
                }}
                sx={{
                  fontSize: { xs: "22px", sm: "40px", md: "40px" },
                  fontFamily: "Inter, serif",
                  color: "#BD6E73",
                  fontWeight: "500",
                }}
              >
                Front-End Developer
              </Typography>
              <Box
                component={motion.div}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  x: { type: "spring", stiffness: 60 },
                  ease: "easeIn",
                  duration: 1,
                  opacity: { duration: 0.6 },
                }}
                sx={{
                  mt: "30px",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#BD6E73",
                    "&:hover": { backgroundColor: "#9A5A61" },
                    transition: "all 0.3s ease",
                  }}
                  href="/HalaMadiCV.pdf"
                  download="Hala Madi CV.pdf"
                >
                  Download CV
                </Button>
                <Button
                  sx={{
                    color: "#BD6E73",
                    fontSize: "16px",
                    fontWeight: "500",
                    "&:hover": {
                      backgroundColor: "#F4E3E4",
                      borderColor: "#BD6E73",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Link to="contact" smooth={true} duration={500} offset={-70}>
                    Hire Me
                  </Link>
                </Button>
              </Box>
            </Box>
          </Container>
        </Element>
      </Box>

      {/* About Me Section */}
      <Element name="about-me">
        <AboutMe />
      </Element>
      {/* Skills Section */}
      <Element name="skills">
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
    </>
  );
};

export default Home;
