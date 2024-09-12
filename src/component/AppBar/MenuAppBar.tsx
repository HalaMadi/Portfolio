import {
  Toolbar,
  Box,
  IconButton,
  Stack,
  Drawer,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { RouterNavLink, StyledAppBar, StyledButton } from "./style";
import Logo from "../../assets/Hala-dev.png";
const pages = ["Home", "About me", "Skills", "Projects", "Contact"];
const MenuAppBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    //higher-order function, meaning it returns another function.
    setOpen(newOpen);
  };
  return (
    <>
      <StyledAppBar position="sticky">
          <Toolbar disableGutters>
            <Box
              component="img"
              src={Logo}
              sx={{
                maxWidth: { xs: "40%", sm: "25%", md: "16%" },
              }}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="open drawer"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              {/* Drawer for mobile menu */}
              <Drawer
                anchor="top"
                open={open}
                onClick={toggleDrawer(false)}
                sx={{
                  width: "100%", // Width of the drawer
                  "& .MuiDrawer-paper": {
                    width: "100%", // Ensure the drawer paper also has the correct width
                  },
                }}
              >
                <Stack sx={{ padding: 2 }} spacing={2}>
                  {pages.map((page) => (
                    <RouterNavLink
                      key={page}
                      to={`/${page.toLowerCase()}`}
                      isActive={
                        window.location.pathname === `/${page.toLowerCase()}`
                      }
                    >
                      {page}
                    </RouterNavLink>
                  ))}
                  <StyledButton variant="contained" sx={{ width: "130px" }}>
                    Hire Me
                  </StyledButton>
                </Stack>
              </Drawer>
            </Box>
            <Box
              sx={{
                justifyContent: "center",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 4,
              }}
            >
              {pages.map((page) => (
                <RouterNavLink
                  key={page}
                  to={`/${page.toLowerCase()}`}
                  isActive={
                    window.location.pathname === `/${page.toLowerCase()}`
                  }
                >
                  {page}
                </RouterNavLink>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <StyledButton variant="contained">Hire Me</StyledButton>
            </Box>
          </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default MenuAppBar;
