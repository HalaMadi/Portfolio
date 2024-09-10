import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "./style";
import Grid from "@mui/material/Grid2";
import AboutMePic from "../../assets/Hala-dev (1).png";

const AboutMe: React.FC = () => {
  const data = [
    { label: "Years of Experience", value: 1 },
    { label: "Completed Projects", value: 10 },
    { label: "Ongoing Projects", value: 3 },
  ];

  return (
    <>
      <StyledBox sx={{ mt: { xs: "0px", sm: "30px", md: "60px" } }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Box
              component="img"
              src={AboutMePic}
              sx={{
                height: { xs: "300px", md: "450px" },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 7 }}>
            <Typography
              sx={{ fontFamily: "outfit", fontSize: "36px", fontWeight: 600 }}
              gutterBottom
            >
              I am a Software Engineering
            </Typography>
            <Typography
              sx={{ fontFamily: "outfit", mb: "15px", fontWeight: 600 }}
              gutterBottom
            >
              Experienced Frontend Developer with over a decade of professional
              expertise in the field. Throughout my career, I have had the
              privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </Typography>
            <Typography
              sx={{ fontFamily: "outfit", mb: "15px", fontWeight: 600 }}
            >
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </Typography>
            <Divider sx={{ m: 5 }} />
            <Box>
              <Grid
                sx={{
                  mt: "8px",
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                {data.map((item, index) => (
                  <Grid key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                        transition: "0.5s",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          background:
                            "linear-gradient(90deg, rgba(191,136,140,1) 0%, rgba(93,140,86,1) 36%, rgba(242,242,242,1) 92%)",
                          backgroundClip: "text",
                        }}
                      >
                        +{item.value}
                      </Typography>
                      <Typography variant="subtitle1">{item.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </StyledBox>
    </>
  );
};

export default AboutMe;
