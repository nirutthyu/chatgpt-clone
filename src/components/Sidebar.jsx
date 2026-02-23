import { useState } from "react";
import { Drawer, List } from "@mui/material";
import SideBarItem from "./SideBarItem";
import SideBarHeader from "./SideBarHeader";
import SearchIcon from "@mui/icons-material/Search";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatHistory from "./ChatHistory";


export default function Sidebar({toggleTheme}) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = function () {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: open ? 220 : 50,
          "& .MuiDrawer-paper": {
            width: open ? 220 : 70,
            overflowX: "hidden",
            transition: "width 0.3s ease",
            padding:"3px"
          },
        }}
      >
        <List
          subheader={<SideBarHeader toggleDrawer={toggleDrawer} open={open} />}
        >
          <SideBarItem
            icon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />}
            text="New Chat"
            open={open}
          />

          <SideBarItem
            icon={<SearchIcon fontSize="small" />}
            text="Search Chats"
            open={open}
          />

          <SideBarItem
            icon={<ImageOutlinedIcon fontSize="small" />}
            text="Images"
            open={open}
          />
           <SideBarItem
            icon={<DarkModeOutlinedIcon fontSize="small" />}
            text="Themes"
            open={open}
            onClick={toggleTheme}
          />
        </List>
        <ChatHistory open={open}></ChatHistory>
      </Drawer>
    </>
  );
}
