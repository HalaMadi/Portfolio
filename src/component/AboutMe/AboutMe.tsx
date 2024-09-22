import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import AboutMePic from "../../assets/Hala-dev (1).png";
import { StyledBox } from "./style";

const AboutMe: React.FC = () => {
  const data = [
    { label: "Years of Experience", value: 1 },
    { label: "Completed Projects", value: 10 },
    { label: "Ongoing Projects", value: 3 },
  ];

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
          {/* Image Grid */}
          <Grid size={{ xs: 6, md: 5 }}>
            <Box
              component="img"
              src={AboutMePic}
              sx={{
                width: "100%",
                height: "500px",
                display: { xs: "none", md: "block" },
              }}
            />
          </Grid>
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
              Experienced Frontend Developer with over a decade of professional
              expertise in the field. Throughout my career, I have had the
              privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { xs: "16px", sm: "18px" },
              }}
            >
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </Typography>
            <Divider sx={{ my: 4 }} />
            {/* Data Display */}
            <Grid
              container
              spacing={3}
              justifyContent="space-between"
              sx={{ mb: "10px" }}
            >
              {data.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", md: "column" },
                      alignItems: "center",
                      padding: "20px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #f5f7fa, #F7E4DF)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      gap: "6px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "20px", md: "24px" },
                        background: "linear-gradient(90deg, #ff6f61, #BD6E73)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "1px",
                        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
                        fontFamily: "Kaushan Script, cursive",
                      }}
                    >
                      +{item.value}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        fontWeight: "bold",
                        color: "#6a7489",
                        letterSpacing: "0.5px",
                        fontFamily: "Outfit",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </StyledBox>
    </>
  );
};

export default AboutMe;
