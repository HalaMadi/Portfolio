import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Divider,
  Container,
} from "@mui/material";
import React from "react";
import trainingProject1 from "../../assets/trainingProject1.png";
import Grid from "@mui/material/Grid2";
import { StyledLink } from "./style";
import TrainingManager from "../../assets/Training-Manager.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
const Projects: React.FC = () => {
  const projectDetails = [
    {
      Name: "Landing Page",
      Description: "Pure web application built with React",
      src: trainingProject1,
      codeLink: "https://github.com/HalaMadi/Training-project",
      Demo: "https://training-project1.vercel.app/#",
    },
    {
      Name: "PTUK-Training-Manager",
      Description: "Graduation-Project",
      src: TrainingManager,
      codeLink: "https://github.com/PTUK-Training-Manager/Graduation-Project",
      Demo: "https://ptuk-trainerize.onrender.com/",
    },
  ];

  return (
    <Container >
      <Box sx={{ flexGrow: 1, mt: { xs: "0px", sm: "30px", md: "60px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "100px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "24px", sm: "30px", md: "36px" },
              textAlign: "center",
              color: "#1A2614",
              display: "flex",
              alignItems: "center",
              gap: { xs: "8px", md: "16px" },
              fontFamily: "Kaushan Script, cursive",
              m: "20px",
            }}
          >
            <Box
              component="span"
              sx={{ color: "#BD6E73", fontSize: "inherit" }}
            >
              &lt;
            </Box>
            Projects
            <Box
              component="span"
              sx={{ color: "#BD6E73", fontSize: "inherit" }}
            >
              /&gt;
            </Box>
          </Typography>
        </Box>
        <Divider sx={{ m: " 10px auto", maxWidth: "50%" }} />
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {projectDetails.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  m: "auto",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s ease-out",
                  "&:hover": {
                    boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)",
                    transform: "scale(1.02)",
                    transition: "0.4s ease",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ maxHeight: "220px" }}
                  image={project.src}
                  alt="Project Thumbnail"
                />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    gutterBottom
                    sx={{
                      fontFamily: "Pigeon, sans-serif",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {project.Name}
                  </Typography>
                  <Box>
                    <StyledLink to={project.codeLink} target="_blank">
                      <GitHubIcon sx={{ color: "#000" }} />
                    </StyledLink>
                    <StyledLink to={project.Demo} target="_blank">
                      <PublicIcon sx={{ color: "#000" }} />
                    </StyledLink>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
