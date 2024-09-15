import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import React from "react";
import trainingProject1 from "../../assets/trainingProject1.png";
import Grid from "@mui/material/Grid2";
import { StyledLink } from "./style";
import TrainingManager from "../../assets/Training-Manager.png";


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
    {
      Name: "Landing Page",
      Description: "Pure web application built with React",
      src: trainingProject1,
      codeLink: "https://github.com/HalaMadi/Training-project",
      Demo: "https://training-project1.vercel.app/#",
    },
    {
      Name: "Landing Page",
      Description: "Pure web application built with React",
      src: trainingProject1,
      codeLink: "https://github.com/HalaMadi/Training-project",
      Demo: "https://training-project1.vercel.app/#",
    },
    {
      Name: "Landing Page",
      Description: "Pure web application built with React",
      src: trainingProject1,
      codeLink: "https://github.com/HalaMadi/Training-project",
      Demo: "https://training-project1.vercel.app/#",
    },
    {
      Name: "Landing Page",
      Description: "Pure web application built with React",
      src: trainingProject1,
      codeLink: "https://github.com/HalaMadi/Training-project",
      Demo: "https://training-project1.vercel.app/#",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, mt: { xs: "0px", sm: "30px", md: "60px" } }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontFamily: "Pigeon, sans-serif",
          mb: 4,
          fontWeight: "bold",
          color: "#1A2614",
        }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {projectDetails.map((project, index) => (
          <Grid size={{xs:12,sm:6,md:4}} key={index}>
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
                sx={{maxHeight:'220px'}}
                image={project.src}
                alt="Project Thumbnail"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: "Pigeon, sans-serif",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {project.Name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, fontSize: "14px" }}
                >
                  {project.Description}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  p: 2,
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <StyledLink
                  to={project.codeLink}
                  target="_blank"
                >
                  Code
                </StyledLink>
                <StyledLink
                  to={project.Demo}
                  target="_blank"
                >
                  Live Demo
                </StyledLink>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
