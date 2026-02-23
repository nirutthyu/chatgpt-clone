import {
  Box,
  TextField,
  IconButton,
  Paper
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MicNoneIcon from "@mui/icons-material/MicNone";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { useState, useRef } from "react";

export default function ChatInput({ onSend, hasMessages }) {
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: hasMessages ? "fixed" : "relative",
        bottom: hasMessages ? 20 : "auto",
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          width: hasMessages ? "100%" : "700px",
          maxWidth: "800px",
          borderRadius: "40px",
          px: 2,
          py: 1,
          bgcolor: "background.paper",
        }}
      >
        <IconButton size="small" sx={{ color: "text.secondary" }}>
          <AddIcon />
        </IconButton>

        <TextField
          fullWidth
          inputRef={inputRef}
          placeholder="Ask anything"
          variant="standard"
          multiline
          maxRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            mx: 1,
            "& .MuiInputBase-input": {
              color: "text.primary",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "text.secondary",
              opacity: 1,
            },
          }}
        />

        <IconButton size="small" sx={{ color: "text.secondary" }}>
          <MicNoneIcon />
        </IconButton>

        <IconButton
          onClick={handleSend}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            ml: 1,
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <GraphicEqIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}