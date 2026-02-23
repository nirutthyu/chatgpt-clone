import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

export default function ChatContainer({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        maxWidth: "800px",
        mx: "auto",
        px: 2,
        py: 4,
        overflowY: "auto",
        bgcolor: "background.paper",
      }}
    >
      {messages.map((msg, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent:
              msg.sender === "user" ? "flex-end" : "flex-start",
            mb: 2,
          }}
        >
          <Box
            sx={{
              bgcolor:
                msg.sender === "user"
                  ? "primary.main"
                  : "background.paper",
              color:
                msg.sender === "user"
                  ? "primary.contrastText"
                  : "text.primary",
              px: 2,
              py: 1,
              borderRadius: 8,
              maxWidth: "75%",
            }}
          >
            <Typography variant="body1">
              {msg.text}
            </Typography>
          </Box>
        </Box>
      ))}

      <div ref={bottomRef} />
    </Box>
  );
}