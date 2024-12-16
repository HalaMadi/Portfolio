import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";

import html5 from "../../assets/skills/html-5.png";
import css from "../../assets/skills/css.png";
import sass from "../../assets/skills/sass.png";
import javaScript from "../../assets/skills/javaScript.png";
import typescript from "../../assets/skills/typeScript.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import react from "../../assets/skills/react.png";
import firebase from "../../assets/skills/firebase.png";

// Array of skill icons
const skillsIcon = [
  { src: html5, alt: "HTML Icon", name: "HTML" },
  { src: css, alt: "CSS Icon", name: "CSS" },
  { src: sass, alt: "SASS Icon", name: "SASS" },
  { src: javaScript, alt: "JavaScript Icon", name: "JavaScript" },
  { src: typescript, alt: "Typescript Icon", name: "TypeScript" },
  { src: git, alt: "Git Icon", name: "Git" },
  { src: github, alt: "GitHub Icon", name: "GitHub" },
  { src: react, alt: "REACT Icon", name: "React" },
  { src: firebase, alt: "Firebase Icon", name: "Firebase" },
];

// Styled Components for Swiper Pagination and Navigation
const StyledSwiperContainer = styled(Box)`
  .swiper-button-next,
  .swiper-button-prev {
    color: #bd6e73; /* Changes arrow color */
    width: 30px; /* Adjusts arrow size */
    height: 30px;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #ff69b4; /* Hover color for arrows */
  }
`;

const Skills: React.FC = () => {
  return (
    <Box
      sx={{
        m: "130px 0px",
      }}
    >
      <Container>
        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "28px", sm: "32px", md: "36px" },
              display: "flex",
              gap: { xs: "8px", md: "16px" },
              fontFamily: "Kaushan Script, cursive",
            }}
          >
            <Box sx={{ color: "#BD6E73", fontSize: "inherit" }}>&lt;</Box>
            Skills
            <Box sx={{ color: "#BD6E73", fontSize: "inherit" }}>/&gt;</Box>
          </Typography>
        </Box>
        <StyledSwiperContainer sx={{ mt: "50px" }}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={4}
            navigation
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {skillsIcon.map((Icon, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {/* Icon Image */}
                  <Box
                    component="img"
                    src={Icon.src}
                    alt={Icon.alt}
                    loading="lazy"
                  />

                  {/* Icon Name */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#333",
                      fontFamily: "Sail, cursive",
                    }}
                  >
                    {Icon.name}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSwiperContainer>
      </Container>
    </Box>
  );
};

export default Skills;
