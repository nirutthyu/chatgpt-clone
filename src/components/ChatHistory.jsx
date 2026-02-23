import {
  ListItem,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import { useState } from "react";
import {
  KeyboardArrowRight,
  ExpandMore,
} from "@mui/icons-material";

export default function ChatHistory({ open }) {
  const [openChats, setOpenChats] = useState(false);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          disableRipple
          onClick={() => setOpenChats((prev) => !prev)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            bgcolor: "transparent",
            color: "text.primary",
            "&:hover": {
              bgcolor: "action.hover",
              "& .chat-arrow": { opacity: 1 },
            },
            "&:active": {
              bgcolor: "action.selected",
            },
            "&.Mui-focusVisible": {
              bgcolor: "action.focus",
            },
          }}
        >
          <ListItemText
            primary="Your Chats"
            sx={{
              flex: "0 0 auto",
              opacity: open ? 1 : 0,
              whiteSpace: "nowrap",
              "& .MuiTypography-root": {
                fontSize: "0.85rem",
                color: "text.primary",
              },
            }}
          />

          {openChats ? (
            <ExpandMore
              className="chat-arrow"
              sx={{
                opacity: 1,
                transition: "opacity 0.2s",
                color: "text.secondary",
              }}
            />
          ) : (
            <KeyboardArrowRight
              className="chat-arrow"
              sx={{
                opacity: open ? 1 : 0,
                transition: "opacity 0.2s",
                color: "text.secondary",
              }}
            />
          )}
        </ListItemButton>
      </ListItem>

      {open && openChats && (
        <List component="div" disablePadding>
          {["Chat 1", "Chat 2", "Chat 3"].map((chat) => (
            <ListItemButton
              key={chat}
              sx={{
                borderRadius: 2,
                py: 0.5,
                minHeight: "30px",
                color: "text.primary",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <ListItemText
                primary={chat}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "0.85rem",
                    color: "text.primary",
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      )}
    </>
  );
}