import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";


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
  { src: html5, alt: "HTML Icon" },
  { src: css, alt: "CSS Icon" },
  { src: sass, alt: "SASS Icon" },
  { src: javaScript, alt: "JavaScript Icon" },
  { src: typescript, alt: "Typescript Icon" },
  { src: git, alt: "Git Icon" },
  { src: github, alt: "GitHub Icon" },
  { src: react, alt: "REACT Icon" },
  { src: firebase, alt: "Firebase Icon" },
];

const Skills: React.FC = () => {
  return (
    <>
    <Box>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={4} 
        navigation  
        pagination={{ clickable: true }}  
        autoplay={{ delay: 2500, disableOnInteraction: true }} 
        breakpoints={{  
          320: { slidesPerView: 1 },  
          480: { slidesPerView: 2 },  
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },  
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("Slide changed")}
      >
        {skillsIcon.map((Icon, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={Icon.src}
              alt={Icon.alt}
              sx={{ width: "200px", margin: "10px", ml:{xs:'50px',sm:'20px'}}}
              loading="lazy"  
            />
            <Typography sx={{textAlign:'center'}}>html</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      </Box>
    </>
  );
};

export default Skills;

