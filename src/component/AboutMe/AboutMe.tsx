import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import AboutMePic from "../../assets/Hala-dev (1).png";
import { StyledBox } from "./style";
import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const AboutMe: React.FC = () => {
  return (
    <>
      <StyledBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
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
            About Me
            <Box sx={{ color: "#BD6E73", fontSize: "inherit" }}>/&gt;</Box>
          </Typography>
        </Box>
        <Divider sx={{ m: " 10px auto", maxWidth: "10%" }} />
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Text Content Grid */}
          <Grid size={{ xs: 10, md: 6 }}>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { xs: "20px", sm: "22px", md: "24px" },
                fontWeight: 600,
                mb: 2,
              }}
              gutterBottom
            >
              I am a Software Engineering
            </Typography>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { xs: "16px", sm: "18px" },
                mb: 3,
              }}
              gutterBottom
            >
              And <strong>Frontend Developer</strong> specializing in React.js
              and TypeScript. Passionate about crafting seamless user
              experiences, I build dynamic, user-friendly web applications with
              a focus on clean, maintainable code. With a commitment to
              delivering high-quality solutions that exceed expectations, I
              bring enthusiasm, dedication, and a user-centered approach to
              every project. My passion for frontend development drives me to
              continuously innovate and create exceptional digital experiences.
            </Typography>
            <Divider sx={{ my: 2 }} />
          </Grid>
          {/* Image Grid */}
          <Grid size={{ xs: 6, md: 5 }}>
            <Box
              component="img"
              src={AboutMePic}
              sx={{
                width: { xs: "100%", md: "90%" },
                height: { xs: "auto", sm: "350px", md: "470px" },
                mx: "auto",
              }}
            />
          </Grid>
          {/* Data Display */}
          <Grid container spacing={3} sx={{ mb: "10px" }}>
            <Box display="flex" gap={2}>
              <a href="https://www.facebook.com/hla.alzalaan" target="_blank">
                {" "}
                <FacebookIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer", color: "#333" }}
                />
              </a>

              <a
                target="_blank"
                href={"https://www.linkedin.com/in/hala-madi-a3964b239/"}
              >
                <LinkedInIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer", color: "#333" }}
                />
              </a>
              <a target="_blank" href={"https://github.com/HalaMadi"}>
                <GitHubIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer", color: "#333" }}
                />
              </a>
            </Box>
          </Grid>
        </Grid>
      </StyledBox>
    </>
  );
};

export default AboutMe;
