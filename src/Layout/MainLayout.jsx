import { Outlet } from "react-router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";

import { Box, useTheme } from "@mui/material";

import "../styles.css";

const MainLayout = () => {
  const theme = useTheme();
  return (
    <>
      <AppBar position="sticky" sx={{ height: "64px" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => window.location.reload()}
            >
              <IconButton>
                <LanguageIcon
                  sx={{
                    color: theme.palette.primary.contrastText,
                    width: 32,
                    height: 32,
                  }}
                />
              </IconButton>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                variant="h4"
              >
                Web Metrics
              </Typography>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: theme.spacing(2),
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
