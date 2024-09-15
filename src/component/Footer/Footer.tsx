import { Box, Container } from "@mui/system";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../../assets/Hala-dev.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        background:
          "radial-gradient(125% 125% at 50% 10%, #fff 40%, #BD6E73 100%)",
        py: 4,
        mt: "auto", // Ensures footer stays at the bottom
        zIndex: 10, // Stays above the gradient
      }}
    >
      <Container>
        <Box
          alignItems="center"
          sx={{ mt: 20 }}
          display="flex"
          flexDirection="column"
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          gap={2}
        >
          <Box
            component="img"
            src={Logo}
            sx={{
              maxWidth: { xs: "80%", sm: "30%", md: "25%" },
              mx: "auto",
            }}
          />
          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "flex-end" }}
            gap={2}
          >
            <Link target="_blank" to={"https://www.facebook.com/hla.alzalaan"}>
              {" "}
              <FacebookIcon
                fontSize="large"
                sx={{ cursor: "pointer", color: "#bf888c" }}
              />
            </Link>
            <Link target="_blank" to={"https://www.facebook.com/hla.alzalaan"}>
              {" "}
              <InstagramIcon
                fontSize="large"
                sx={{ cursor: "pointer", color: "#bf888c" }}
              />
            </Link>
            <Link target="_blank" to={"https://www.facebook.com/hla.alzalaan"}>
              <LinkedInIcon
                fontSize="large"
                sx={{ cursor: "pointer", color: "#bf888c" }}
              />
            </Link>
            <Link target="_blank" to={"https://github.com/HalaMadi"}>
              {" "}
              <GitHubIcon
                fontSize="large"
                sx={{ cursor: "pointer", color: "#bf888c" }}
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
