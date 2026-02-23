import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton
} from "@mui/material";
import {
  MoreHoriz,
  IosShare,
  Memory,
  ArrowDropDown
} from "@mui/icons-material";
import { useState } from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: "none",
        borderBottom: (theme) =>
          `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 56 }}>
        <Button
          onClick={handleClick}
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            color: "text.primary",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              bgcolor: "action.hover",
            },
          }}
          endIcon={<ArrowDropDown />}
        >
          ChatGPT
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          sx={{ mt: 0.5 }}
        >
          <MenuItem onClick={handleClose}>
            ChatGPT
          </MenuItem>
          <MenuItem onClick={handleClose}>
            ChatGPT Plus
          </MenuItem>
        </Menu>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: "0.875rem",
              color: "text.secondary",
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Memory fontSize="small" />
            Memory full
          </Box>

          <Button
            startIcon={<IosShare fontSize="small" />}
            sx={{
              textTransform: "none",
              color: "text.primary",
              border: "1px solid transparent",
              fontSize: "0.875rem",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          >
            Share
          </Button>

          <IconButton
            sx={{
              color: "text.primary",
              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          >
            <MoreHoriz />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}