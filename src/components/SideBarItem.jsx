import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";

export default function SideBarItem({ icon, text, open,onClick }) {
  return (
    <ListItem disablePadding>
      {open ? (
        <ListItemButton
        onClick={onClick}
          sx={{
            px: 2.5,
            borderRadius: "8px",
           py: 0.5, 

          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>

          <ListItemText
            primary={text}
            sx={{
             "& .MuiTypography-root": {
      fontSize: "0.85rem"},
              opacity: open ? 1 : 0,
              transition: "opacity 0.2s ease",
              whiteSpace: "nowrap",
            }}
          />
        </ListItemButton>
      ) : (
        <IconButton
          sx={{
            width: 40,
            height: 40,
            mx: "auto",
            borderRadius: "8px",
          }}
        >
          {icon}
        </IconButton>
      )}
    </ListItem>
  );
}
